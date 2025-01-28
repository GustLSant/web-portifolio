import './CertificatesSection.css'


export default function CertificatesSection({language}){


    return(
        <section className="certificates-section section black-section">
            <h2>{(language === 'pt' ? 'Certificados' : 'Certificates')}</h2>

            <div>
                <ul>
                    <li>
                        {(language === 'pt') ? 'Certificado de Registro de Software da empresa INPI Brasil - Instituto Nacional da Propriedade Industrial' : 'Software Registration Certificate from the company INPI Brazil - National Institute of Industrial Property'}
                        <br />
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7288989976468348929/" target='_blank' rel='noreferrer'>{(language === 'pt' ? 'Ver certificado' : 'See Certificate')}</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}