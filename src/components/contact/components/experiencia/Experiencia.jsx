"use strict";
import "./Experiencia.css";
import { CompaniesData } from "./CompaniesData";
import { CompanyCard } from "./CompanyCard";

export function Experiencia() {
  return (
    <main className="experiencia">
      {CompaniesData.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </main>
  );
}
