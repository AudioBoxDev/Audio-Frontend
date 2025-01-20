"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TableOfContents from "./table-of-content"
import ScrollToTopButton from "./scroll-to-top-bottom"


const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `
      <p>Welcome to AudioBlocks. These Terms of Service ("Terms") govern your access to and use of AudioBlocks' services, including our website, mobile applications, and any other software or services offered by AudioBlocks in connection to any of the foregoing ("the Service").</p>
      <p>Please read these Terms carefully before using the Service. By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of the terms, then you may not access the Service.</p>
    `,
  },
  {
    id: "definitions",
    title: "2. Definitions",
    content: `
      <ul>
        <li><strong>AudioBlocks:</strong> The platform facilitating the distribution, streaming, and licensing of audio content.</li>
        <li><strong>Listeners:</strong> Individuals or entities registered on the Platform to access and enjoy audio content.</li>
        <li><strong>Artists:</strong> Individuals or entities who create, upload, or distribute audio content via the Platform.</li>
        <li><strong>Content:</strong> Any audio files, music, podcasts, sound effects, or other audio-related media uploaded by Artists.</li>
        <li><strong>License:</strong> The permission granted to Listeners to use Content under specific terms outlined herein.</li>
      </ul>
    `,
  },
  {
    id: "account-terms",
    title: "3. Account Terms",
    content: `
      <p>To access and use certain features of the Service, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
      <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
    `,
  },
  {
    id: "content-ownership",
    title: "4. Content Ownership and Licensing",
    content: `
      <p>Artists retain all intellectual property rights to their uploaded Content unless explicitly agreed otherwise. By uploading Content to AudioBlocks, Artists grant AudioBlocks a non-exclusive, worldwide, royalty-free license to host, stream, distribute, and promote their Content on the Platform.</p>
      <p>Listeners may stream or download Content in accordance with the licensing terms set by the Artists. Unauthorized distribution, reproduction, or modification of Content is strictly prohibited.</p>
    `,
  },
  {
    id: "prohibited-activities",
    title: "5. Prohibited Activities",
    content: `
      <p>You agree not to engage in any of the following prohibited activities:</p>
      <ul>
        <li>Copying, distributing, or disclosing any part of the Service in any medium, including without limitation by any automated or non-automated "scraping".</li>
        <li>Using any automated system, including without limitation "robots," "spiders," "offline readers," etc., to access the Service.</li>
        <li>Transmitting spam, chain letters, or other unsolicited email.</li>
        <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Service.</li>
        <li>Taking any action that imposes, or may impose at our sole discretion an unreasonable or disproportionately large load on our infrastructure.</li>
        <li>Uploading invalid data, viruses, worms, or other software agents through the Service.</li>
        <li>Impersonating another person or otherwise misrepresenting your affiliation with a person or entity.</li>
        <li>Violating any applicable law or regulation.</li>
      </ul>
    `,
  },
  {
    id: "dmca",
    title: "6. DMCA Copyright Policy",
    content: `
      <p>We respect the intellectual property rights of others and expect users of the Service to do the same. We will respond to notices of alleged copyright infringement that comply with applicable law and are properly provided to us.</p>
      <p>If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, please provide our copyright agent with the following information:</p>
      <ul>
        <li>A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.</li>
        <li>Identification of the copyrighted work claimed to have been infringed.</li>
        <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material.</li>
        <li>Your contact information, including your address, telephone number, and an email address.</li>
        <li>A statement by you that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
        <li>A statement that the information in the notification is accurate, and, under penalty of perjury, that you are authorized to act on behalf of the copyright owner.</li>
      </ul>
    `,
  },
  {
    id: "termination",
    title: "7. Termination",
    content: `
      <p>We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
      <p>If you wish to terminate your account, you may simply discontinue using the Service. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
    `,
  },
  {
    id: "indemnification",
    title: "8. Indemnification",
    content: `
      <p>You agree to defend, indemnify and hold harmless AudioBlocks and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password; b) a breach of these Terms, or c) Content posted on the Service.</p>
    `,
  },
  {
    id: "limitation-liability",
    title: "9. Limitation of Liability",
    content: `
      <p>In no event shall AudioBlocks, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>
    `,
  },
  {
    id: "disclaimer",
    title: "10. Disclaimer",
    content: `
      <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
      <p>AudioBlocks, its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.</p>
    `,
  },
  {
    id: "governing-law",
    title: "11. Governing Law",
    content: `
      <p>These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.</p>
      <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.</p>
    `,
  },
  {
    id: "changes",
    title: "12. Changes",
    content: `
      <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
      <p>By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.</p>
    `,
  },
  {
    id: "contact",
    title: "13. Contact Us",
    content: `
      <p>If you have any questions about these Terms, please contact us at:</p>
      <p>AudioBlocks<br>
      [39 Abadek Avenue Ikorodu
 Lagos Nigeria]<br>
      Email: streamaudiobox102@gmail.com<br>
      Phone: [+234 7085670945]</p>
    `,
  },
]

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState(sections[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px" },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">AudioBlocks Terms of Service</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <TableOfContents sections={sections} activeSection={activeSection} />
          <div className="flex-grow space-y-8">
            {sections.map((section) => (
              <Card key={section.id} className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle id={section.id} className="text-2xl font-semibold text-white scroll-mt-20">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    dangerouslySetInnerHTML={{ __html: section.content }}
                    className="prose prose-invert max-w-none text-gray-300"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  )
}

