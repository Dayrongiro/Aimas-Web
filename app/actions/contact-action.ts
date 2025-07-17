"use server"

interface FormState {
  success: boolean
  message: string
}

export async function submitContactForm(prevState: FormState | null, formData: FormData): Promise<FormState> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // In a real application, you would integrate with an email service here (e.g., Resend, SendGrid, Nodemailer).
  // Example:
  // try {
  //   await resend.emails.send({
  //     from: 'onboarding@resend.dev',
  //     to: 'comercialaimas@gmail.com',
  //     subject: `Consulta de ${name}`,
  //     html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensaje:</strong> ${message}</p>`,
  //   });
  //   return { success: true, message: '¡Mensaje enviado con éxito!' };
  // } catch (error) {
  //   console.error('Error sending email:', error);
  //   return { success: false, message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' };
  // }

  console.log("Simulando envío de email:")
  console.log(`Nombre: ${name}`)
  console.log(`Email: ${email}`)
  console.log(`Mensaje: ${message}`)
  console.log("---")

  // For demonstration, always return success
  return { success: true, message: "¡Mensaje enviado con éxito! (Simulado)" }
}
