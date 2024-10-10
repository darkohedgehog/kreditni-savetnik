"use client"
import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FaLocationArrow } from "react-icons/fa6";

interface FormFields {
  name: string;
  lastName: string;
  dateOfBirth: string;
  homeBank: string;
  email: string;
  phoneNumber: string;
  employmentStatus: string[]; // Za checkbox polja
  creditType: string[]; // Za checkbox polja
  loanAmount: string;
  repaymentTerm: string;
  message: string;
}

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormFields>({
    name: "",
    lastName: "",
    dateOfBirth: "",
    homeBank: "",
    email: "",
    phoneNumber: "",
    employmentStatus: [],
    creditType: [],
    loanAmount: "",
    repaymentTerm: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setForm({
        ...form,
        [name]: [...(form[name as keyof FormFields] as string[]), value],
      });
    } else {
      setForm({
        ...form,
        [name]: (form[name as keyof FormFields] as string[]).filter((v) => v !== value),
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Provera da li su sva polja popunjena
    const {
      name,
      lastName,
      dateOfBirth,
      homeBank,
      email,
      phoneNumber,
      employmentStatus,
      creditType,
      loanAmount,
      repaymentTerm,
      message,
    } = form;

    if (
      !name ||
      !lastName ||
      !dateOfBirth ||
      !homeBank ||
      !email ||
      !phoneNumber ||
      employmentStatus.length === 0 ||
      creditType.length === 0 ||
      !loanAmount ||
      !repaymentTerm ||
      !message
    ) {
      alert("Molimo popunite sva polja.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          last_name: form.lastName,
          date_of_birth: form.dateOfBirth,
          home_bank: form.homeBank,
          from_email: form.email,
          phone_number: form.phoneNumber,
          employment_status: form.employmentStatus.join(", "),
          credit_type: form.creditType.join(", "),
          loan_amount: form.loanAmount,
          repayment_term: form.repaymentTerm,
          message: form.message,
          to_name: "Savetnik za kredite",
          to_email: "kreditnisaveti@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setLoading(false);
          alert("Hvala Vam. Dobit ćete odgovor u što kraćem roku.");

          setForm({
            name: "",
            lastName: "",
            dateOfBirth: "",
            homeBank: "",
            email: "",
            phoneNumber: "",
            employmentStatus: [],
            creditType: [],
            loanAmount: "",
            repaymentTerm: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, dogodila se greška. Pokušajte ponovo.");
        }
      );
  };

  return (
    <div className="w-2/3">
      <h1 className="flex items-center justify-center my-3 text-xl font-semibold uppercase text-accent dark:text-accentDark">
        Kontakt forma
      </h1>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="my-8 flex flex-col gap-6 border-2 border-[#6C6C6C] shadow-lg shadow-accent dark:shadow-accentDark rounded-[30px]"
      >
        {/* Ime */}
        <label className="flex flex-col">
          <span className="text-white font-medium my-4 mx-5">Vaše ime</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            placeholder="Kako se zovete?"
            required
            className="py-4 px-6 mx-2 placeholder:text-secondary text-white border border-[#6C6C6C] shadow-lg rounded-[30px] font-medium"
          />
        </label>

        {/* Prezime */}
        <label className="flex flex-col">
          <span className="text-white font-medium my-4 mx-5">Vaše prezime</span>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleInputChange}
            placeholder="Kako se prezivate?"
            required
            className="py-4 px-6 mx-2 placeholder:text-secondary text-white border border-[#6C6C6C] shadow-lg rounded-[30px] font-medium"
          />
        </label>

        {/* Datum rođenja */}
        <label className="flex flex-col">
          <span className="text-white font-medium my-4 mx-5">Datum rođenja</span>
          <input
            type="date"
            name="dateOfBirth"
            value={form.dateOfBirth}
            onChange={handleInputChange}
            required
            className="py-4 px-6 mx-2 text-white border border-[#6C6C6C] shadow-lg rounded-[30px] font-medium"
          />
        </label>

        {/* Matična banka */}
        <label className="flex flex-col">
          <span className="text-white font-medium my-4 mx-5">Matična banka</span>
          <input
            type="text"
            name="homeBank"
            value={form.homeBank}
            onChange={handleInputChange}
            placeholder="Vaša matična banka"
            required
            className="py-4 px-6 mx-2 placeholder:text-secondary text-white border border-[#6C6C6C] shadow-lg rounded-[30px] font-medium"
          />
        </label>

        {/* Email */}
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4 mx-5">Vaš email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder="Koji je Vaš email?"
            required
            className="py-4 px-6 mx-2 placeholder:text-secondary text-white border border-[#6C6C6C] shadow-lg rounded-[30px] font-medium"
          />
        </label>

        {/* Broj telefona */}
        <label className="flex flex-col">
          <span className="text-white font-medium my-4 mx-5">Broj telefona</span>
          <input
            type="tel"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleInputChange}
            placeholder="Vaš broj telefona"
            required
            className="py-4 px-6 mx-2 placeholder:text-secondary text-white border border-[#6C6C6C] shadow-lg rounded-[30px] font-medium"
          />
        </label>

        {/* Status zaposlenosti */}
        <fieldset className="flex flex-col">
          <legend className="text-white font-medium my-4 mx-5">Status zaposlenosti</legend>
          <div className="mx-5 flex flex-col gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="employmentStatus"
                value="zaposlen za stalno"
                checked={form.employmentStatus.includes("zaposlen za stalno")}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 text-white">Zaposlen za stalno</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="employmentStatus"
                value="na određeno"
                checked={form.employmentStatus.includes("na određeno")}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 text-white">Na određeno</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="employmentStatus"
                value="preko PP ugovor"
                checked={form.employmentStatus.includes("preko PP ugovor")}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 text-white">Preko PP ugovor</span>
            </label>
            {/* Penzioner */}
            <label className="flex items-center">
              <input
                type="checkbox"
                name="employmentStatus"
                value="penzioner trajna/starosna penzija"
                checked={form.employmentStatus.includes("penzioner trajna/starosna penzija")}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 text-white">Penzioner trajna/starosna penzija</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="employmentStatus"
                value="invalidska penzija"
                checked={form.employmentStatus.includes("invalidska penzija")}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 text-white">Invalidska penzija</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="employmentStatus"
                value="porodična penzija"
                checked={form.employmentStatus.includes("porodična penzija")}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 text-white">Porodična penzija</span>
            </label>
          </div>
        </fieldset>

        {/* Tip kredita */}
        <fieldset className="flex flex-col">
          <legend className="text-white font-medium my-4 mx-5">
            Tip kredita za koji ste zainteresovani
          </legend>
          <div className="mx-5 flex flex-col gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="creditType"
                value="dinarski keš kredit"
                checked={form.creditType.includes("dinarski keš kredit")}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 text-white">Dinarski keš kredit</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="creditType"
                value="kredit za refinansiranje"
                checked={form.creditType.includes("kredit za refinansiranje")}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 text-white">Kredit za refinansiranje</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="creditType"
                value="auto kredit"
                checked={form.creditType.includes("auto kredit")}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 text-white">Auto kredit</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="creditType"
                value="stambeni kredit"
                checked={form.creditType.includes("stambeni kredit")}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 text-white">Stambeni kredit</span>
            </label>
          </div>
        </fieldset>

        {/* Iznos kredita */}
        <label className="flex flex-col">
          <span className="text-white font-medium my-4 mx-5">Iznos kredita</span>
          <input
            type="number"
            name="loanAmount"
            value={form.loanAmount}
            onChange={handleInputChange}
            placeholder="Unesite iznos kredita"
            required
            className="py-4 px-6 mx-2 placeholder:text-secondary text-white border border-[#6C6C6C] shadow-lg rounded-[30px] font-medium"
          />
        </label>

        {/* Predviđeni rok otplate */}
        <label className="flex flex-col">
          <span className="text-white font-medium my-4 mx-5">Predviđeni rok otplate</span>
          <input
            type="number"
            name="repaymentTerm"
            value={form.repaymentTerm}
            onChange={handleInputChange}
            placeholder="Unesite rok otplate u mesecima"
            required
            className="py-4 px-6 mx-2 placeholder:text-secondary text-white border border-[#6C6C6C] shadow-lg rounded-[30px] font-medium"
          />
        </label>

        {/* Poruka */}
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4 mx-5">Vaša poruka</span>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleInputChange}
            placeholder="Koja je Vaša poruka?"
            required
            className="py-4 px-6 mx-2 placeholder:text-secondary text-white border border-[#6C6C6C] shadow-lg rounded-[30px] font-medium"
          />
        </label>

        {/* Dugme za slanje */}
        <button
          type="submit"
          className="relative mb-6 inline-flex h-12 w-[200px] mx-5 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-accent dark:text-accentDark backdrop-blur-3xl gap-3">
            {loading ? "Šaljem..." : "Pošalji"}
            <FaLocationArrow />
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
