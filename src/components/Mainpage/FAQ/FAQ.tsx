import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionContent = [
  {
    question: "1. O que é Menteliz?",
    answer:
      "O Menteliz é uma plataforma de suporte à saúde mental para jovens e adultos. O Menteliz permite que os usuários monitorem seu humor, recebam notificações de medicação e criem uma rede de apoio com familiares e médicos.",
  },
  {
    question: "2. Quem pode usar o Menteliz?",
    answer:
      "O aplicativo foi projetado para ser utilizado por pacientes (crianças e adolescentes com possíveis distúrbios de saúde mental), seus familiares e médicos. Cada grupo de usuários tem acesso a funcionalidades específicas para melhor atender suas necessidades.",
  },
  {
    question: "3. Como faço para criar uma conta?",
    answer:
      "Para criar uma conta, basta clicar no botão de Cadastro na página inicial, preencher os campos obrigatórios (nome de usuário, e-mail, senha, etc.) e seguir as instruções na tela.",
  },
  {
    question: "4. É seguro usar o Menteliz?",
    answer:
      "Sim, a segurança dos nossos usuários é uma prioridade. Utilizamos criptografia e outras medidas de segurança para proteger seus dados pessoais e garantir que suas informações estejam seguras.",
  },
  {
    question: "5. Como funciona o rastreamento de humor?",
    answer:
      "O rastreamento de humor permite que os usuários registrem diariamente como se sentiram e avaliem seu humor em uma escala de 1 a 5. Esses registros ajudam a monitorar o bem-estar emocional ao longo do tempo e a identificar padrões.",
  },
  {
    question: "6. Como configuro as notificações de medicação?",
    answer:
      "Você pode configurar as notificações de medicação acessando a seção de Medicações, adicionando as informações sobre o medicamento (nome, dosagem, horário) e ativando as notificações. O Menteliz enviará lembretes no horário configurado.",
  },
  {
    question: "7. Posso adicionar meus familiares e médicos ao Menteliz?",
    answer:
      "Sim, você pode adicionar familiares e médicos como contatos. Isso cria uma rede de apoio onde seus entes queridos e profissionais de saúde podem acompanhar seu progresso e oferecer suporte adicional.",
  },
  {
    question: "8. O que acontece se eu esquecer minha senha?",
    answer:
      "Se você esquecer sua senha, clique no link Esqueceu a senha? na tela de login. Você será direcionado para uma página onde poderá redefinir sua senha seguindo as instruções enviadas para o seu e-mail.",
  },
  {
    question: "9. Existe algum custo para usar o Menteliz?",
    answer:
      "Atualmente, nossa plataforma é gratuito. Estamos comprometidos em tornar o suporte à saúde mental acessível para todos. Qualquer mudança na política de custos será comunicada antecipadamente aos nossos usuários.",
  },
  {
    question: "10. Como posso entrar em contato com o suporte?",
    answer:
      "Se você tiver alguma dúvida, problema ou sugestão, pode entrar em contato com nosso suporte através do e-mail menteliz@suporte.com. Estamos aqui para ajudar!",
  },
];

const accordionValues = accordionContent.map((_, index) => `item-${index + 1}`);

const accordionItems = accordionContent.map((content, index) => (
  <AccordionItem value={`item-${index}`} key={index}>
    <AccordionTrigger className="text-start">
      {content.question}
    </AccordionTrigger>
    <AccordionContent>
      <p>{content.answer}</p>
    </AccordionContent>
  </AccordionItem>
));

export default function FAQ() {
  return (
    <section className="p-[10%] pt-0 space-y-8">
      <h2 className="row-start-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl/none text-mBlue-600 font-bold">
        Perguntas Frequentes
      </h2>

      <Accordion type="multiple" defaultValue={["item-0"]} className="w-full">
        {accordionItems}
      </Accordion>
    </section>
  );
}
