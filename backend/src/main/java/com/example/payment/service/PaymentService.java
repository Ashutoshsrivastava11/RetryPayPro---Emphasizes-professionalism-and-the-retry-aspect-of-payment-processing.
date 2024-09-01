package main.java.com.example.payment.service;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Transactional
    public String processPayment(Payment payment) {
        try {
            paymentRepository.save(payment);

            for (int attempt = 1; attempt <= 3; attempt++) {
                if (attemptPaymentProcessing(payment)) {
                    payment.setStatus("SUCCESS");
                    paymentRepository.save(payment);
                    return "Payment processed successfully";
                }
                Thread.sleep(2000);
            }
            throw new PaymentException("Failed after 3 attempts");

        } catch (InterruptedException | PaymentException e) {
            payment.setStatus("FAILED");
            paymentRepository.save(payment);
            return "Payment failed";
        }
    }

    private boolean attemptPaymentProcessing(Payment payment) {
        return Math.random() > 0.7;
    }

    public String getPaymentStatus(Long paymentId) {
        return paymentRepository.findById(paymentId)
                .map(Payment::getStatus)
                .orElse("Payment not found");
    }
}
