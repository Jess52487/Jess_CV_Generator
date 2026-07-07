A SEMINAR REPORT  

ON 

DESIGN AND IMPLEMENTATION OF AN AUTOMATIC CV GENERATOR



BY 

SAMUEL JESSICA CHINEYENWA                                                             2022 224 170



SUBMITTED TO THE  

DEPARTMENT OF COMPUTER SCIENCE FACULTY OF PHYSICAL SCIENCES  



 

IN PARTIAL FULFILMENT OF THE REQUIREMENT FOR THE AWARD OF BACHELOR OF SCIENCE (B.SC.) DEGREE IN COMPUTER SCIENCE IN FACULTY OF PHYSICAL SCIENCE.

 

SUPERVISOR: PROF O.C. OKEKE  

APRIL, 2026. 

 

CERTIFICATION PAGE 

I Samuel Jessica C. in the Department of Computer Science, Chukwuemeka Odumegwu Ojukwu University, Uli Campus with Registration Number 2022 224 170 has done his seminar in partial fulfillment of the requirement for the award of Bachelor of Science (B.Sc) under the guidance of the supervisor Prof O. C. Okeke  

 

APPROVED BY 

 

----------------------------------					-------------------------------- 

Prof O. C. Okeke						Date 

(Seminar Supervisor) 

 

 

 

----------------------------------						----------------------------------

 Prof. I. J. Mgbeafuluike							Date 

(Head of Department) 

 

 

 

 

 

 

DEDICATION 

I dedicate this project to God Almighty for His guidance, strength, and wisdom throughout the course of my study. I also dedicate this work to my parents and family for their constant support, encouragement, and sacrifices which made my education possible. Their belief in my ability has been a great source of motivation. This work is equally dedicated to my lecturers and supervisor whose knowledge, patience, and guidance contributed greatly to the successful completion of this project. Finally, I dedicate this project to my friends and colleagues who offered advice, encouragement, and support during the process of carrying out this research work. 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

ACKNOWLEDGEMENTS

I sincerely give thanks to God Almighty for His grace, strength, and guidance throughout the period of this seminar. Without His support, the successful completion of this seminar work would not have been possible. My profound gratitude goes to my supervisor for the valuable guidance, constructive suggestions, and encouragement given during the course of carrying out this research. The support and academic direction provided greatly contributed to the success of this work.

I also wish to appreciate the lecturers in my department for the knowledge and training they have imparted to me throughout my academic program. Their dedication to teaching has played a significant role in shaping my academic growth. My sincere appreciation goes to my parents and family members for their prayers, financial support, understanding, and constant encouragement during my studies.

Finally, I am grateful to my friends and colleagues who contributed in one way or another toward the completion of this seminar work. May God bless you all.

 

 

 

 

 

 

 

 

 

 

 

 

ABSTRACT 

A Curriculum Vitae (CV) is an important document used by individuals to present their educational background, professional qualifications, skills, and achievements to potential employers, scholarship boards, and promotion committees. This study focuses on the design and implementation of an automated Curriculum Vitae Generator that simplifies the process of creating professional CVs. The main objective of the research is to develop a computerized system capable of generating modern and well-structured CVs for job applicants while also ensuring the accurate capture and organization of applicants’ biodata and professional information. The need for this research arises from several challenges associated with the traditional methods of job application and CV preparation. In the conventional system, job seekers often rely on print and visual media to search for employment opportunities, which are sometimes limited to specific locations. Applications are usually submitted manually, which can lead to inefficiencies such as document loss during transit, delays, and difficulties in managing large volumes of applications. Employers also face challenges in advertising vacancies, sorting through numerous applicant documents, and conducting selection processes based on qualifications using manual procedures. To address these challenges, the study adopts the Object-Oriented Analysis and Design Methodology (OOADM), which emphasizes the use of objects throughout the software development process. The system is implemented using web-based programming technologies including HTML, CSS, JavaScript, PHP, SQL, and jQuery. These technologies were selected because they support the development of a platform-independent web application that can be accessed easily by users. The proposed system is expected to automatically process applicants’ biodata and generate a structured and professional CV. This research will benefit job seekers, organizations, and researchers by providing a more efficient CV generation process and by serving as a reference for further studies in automated document generation systems.

 

 

 

















TABLE OF CONTENTS

Title Page 											i

Certification											ii

Dedication 											iii

Acknowledgements 										iv

Abstract 											v

Table of Contents 										vi

CHAPTER ONE: INTRODUTION							1

1.1 Background of Study									1

1.2 Statement of Problem 									2

1.3 Aim and objective of study								3

1.4 Significance of the Study									3

1.5 Scope of the Study									4

1.6 Limitation of the study									4

1.7 Definition of terms									4

CHAPTER TWO: LITERATURE REVIEW						6

2.1 Theoretical Reviews									6

2.1.1 Document Formatting and Layout Engines						7

2.1.2 Data Parsing and Information Extraction						8

2.2 Review of Related Works									9

2.3 Summary of Literature Review and Knowledge Gap					12

CHAPTER THREE: METHODOLOGY AND SYSYTEM ANALYSIS		16

3.1 System Analysis										16

3.1.1 Analysis of the Existing System 							16

3.1.1.1 Weaknesses of the Existing System						16

3.1.2 Analysis of the Proposed System							17

3.1.2.1 Advantages of the Proposed System						18

3.1.2.2 High Level Model of the Proposed System 					19

3.2 Methodology Adopted 									20

REFERENCES 										25

CHAPTER ONE

INTRODUTION

1.1 Background of Study

Curriculum vitae contain information which is written by the academic to signal their qualifications and academic achievements to employers, granting agencies, or promotion and tenure committees. Decision makers face numerous problems with CVS as a vehicle that carries important information, including incomplete, outdated, biased, private, as well as falsified and fabricated information. To complicate matters, decision makers themselves could be making biased decisions even when CV information is complete and accurate due to potential discriminatory practices. There is weak consistency or standardization in implementing internationally, and little verification.

Technology is constantly changing; society as we know depends on this fact, that which we take for granted today would have been the stuff of science fiction as little as fifty years ago. In the early years of the twenty first century, it is computers and the internet that have captured the public imagination, and found their way into not just the working environments, but increasingly into the domestic spaces. In this modern society, if we are not capable to cope up with these changes than we not going tom stand or survive anywhere in this technical world (Shiferaw and Birbirsa, 2025). 

Today there is no place for errors, so as to make a system more effective and efficient we need such technology where error prone chances must be least. In the scenario of this project, we are required to develop a web-based application on job portal management system. In this time of recession where everyone, is either experienced or fresher, is in search for a job, this job portal can prove to be very helpful since it allows users of different profile to upload their CVs, search job on the basis of their qualification (Abdullah et al., 2020)

Every user can access through user id and apply for multiple job at a time. Viewing available jobs or applies for the job at the agency can be done for which job-seekers has to go to the agency and check the available job at the agency. Job seekers check the list of jobs for the seeker for his qualifications and then update the jobs database. The developed job portal management system is web-based which requires Employee registration &profile, job search, Employer registration &profile, and subscription option for both Employer and Employer e.t.c (Baranyi, 2025)

Employer can add own profile and post jobs and job seeker can search job based on Geographical area (county, state, and city), qualification, and company wise or on the basis of Experience and Expertise wise.



1.2 Statement of Problem 

The manual preparation of Curriculum Vitae (CV) is associated with several challenges that affect the quality of job applications. These challenges often lead to poor formatting, incomplete information, and delays. As a result, many applicants fail to present their qualifications professionally, these challenges include 

Job seekers often depend on print and visual media to search for job opportunities, which limits access to vacancies outside their immediate location. 

The traditional method of preparing Curriculum Vitae (CV) manually is time-consuming and stressful for applicants. 

Many applicants do not have adequate knowledge of proper CV formatting and structure, leading to poorly arranged CVs. 

Manual submission of applications through physical means can result in loss or damage of important documents during transit. 

Employers face difficulties in sorting through numerous applications and identifying qualified candidates quickly. 

Errors such as incomplete personal details, spelling mistakes, and wrong information are common in manually prepared CVs. 

Many job seekers, especially fresh graduates, struggle to create attractive and standard CVs that meet employer expectations. 

The old system consumes unnecessary paper resources and does not support digital transformation. 



1.3 Aim and objective of study

The aim of the study is to design and implement an automatic CV generator. 

The objectives are 

To design a system that collects relevant user information such as personal details, educational background, skills, work experience, and achievements. 

To implement an automated system that organizes the collected information into a standard CV format. 

To reduce the difficulties faced by students and job seekers when creating professional CVs manually. 

To improve the quality and presentation of CVs generated by users. 

To provide a simple and user-friendly platform that allows users to quickly generate and download their CVs.



1.4 Significance of the Study

The significance of this study lies in its ability to provide a faster, easier, and more efficient way of preparing Curriculum Vitae (CV). The automatic CV generator will help job seekers create professional and standard CVs without stress or wasting much time. It will also reduce errors such as poor formatting, incomplete information, and spelling mistakes commonly found in manually prepared CVs.

This study will be beneficial to students and fresh graduates who need CVs for SIWES, internships, scholarships, and job opportunities. It will help them present their qualifications, skills, and experiences in a proper and organized manner.

The system will also benefit recruitment agencies, organizations, and employers by making applicants’ information clear, concise, and easy to review during recruitment processes. This can save time in selecting qualified candidates.

The study will promote the use of technology in career development and job application processes. It will encourage digital solutions that improve productivity and reduce dependence on manual methods of CV preparation.





1.5 Scope of the Study

The study focuses on the design and implementation of an automatic CV generator for students and job seekers in Nigerian universities, The system will be developed to assist users in generating well-structured and professional Curriculum Vitae by collecting relevant information such as personal details, educational background, skills, work experience, and achievements. The CV generator will organize the provided information into a standard and professional CV format automatically. 



1.6 Limitation of the study

During the course of this study, many things militated against its completion, some of which are:

Establishment policies: Establishment policies posed a serious limitation as most staffs are not ready to release information needed from the staffs of, they did not release at all for security purposes, hence the scope was reduced.

Research material: availability of research is a major setback to the scope of the study.

Frequent power failure: Lack of electricity in the school made it a little too difficult to work with my laptop. This made the append me append more money on charging my devices outside to ensure sustainable power. 

Financial constraint: in sourcing for the relevant materials, literature or information and in the process of data collection (internet). 



Definition of terms

Administrator: A person who dispenses or administers something.

Applications: A person who makes a formal application for something, especially a job.

Company: A company, abbreviated as co, is a legal entity made up of an association of people, be they natural, legal, or a mixture of both, for carrying on a commercial or industrial enterprise.

CV (Curriculum vitae): A brief account of a person education, qualifications, and previous occupations, typically sent with a job application.

Graduate: Refers to someone who has been the subject of a graduation, namely; someone who has completed the requirement of an academic degree.

Job: A person who makes a formal application for something, especially a job.

Portal: An internet site providing access or links to other sites.

Record: A number of related items of information which are handled as a unit. 

Recruitment: Recruitment refers to the overall process of attracting, short listing, selecting and appointing suitable candidates for jobs within an organization.

Qualifications: A pass of an examination or an official completion of a course, especially one conferring status as a recognized practitioner of a profession or activity.

































CHAPTER TWO

LITERATURE REVIEW

2.1 Theoretical Reviews 

Automated document generation is a foundation within software engineering that focuses on the transformation of structured data into coherent, human-readable documents. This principle pins the design of automatic CV generators, which rely on structured data interpretation, template-driven systems, and natural language processing to produce professional resumes efficiently. Automated document generation is a response to the complexity of software systems and the need for consistent documentation. Early approaches relied on static templates that mapped user data into predefined structures. These methods ensured uniformity but lacked flexibility. As software engineering advanced, automatic code generation techniques were extended to documentation, highlighting the importance of reducing human error and maintaining consistency across large-scale projects. Such techniques became essential in environments where rapid development cycles demanded efficient documentation processes (Alharbi and Alshayeb, 2025).

The theoretical foundation of automated document generation is focused on three points: structured data interpretation, template-based generation, and natural language processing. Structured data interpretation allows systems to parse inputs such as XML, JSON, or database records, ensuring that information is correctly mapped to document sections. Template-based generation provides the blueprint for document layout, enforcing consistency while allowing customization for different contexts, such as resumes or technical reports. Natural language processing, particularly with the advent of large language models, enables systems to produce grammatically correct and contextually appropriate text, enhancing the readability and professionalism of generated documents (Thota and Arora, 2024). Recent advancements have introduced artificial intelligence into automated documentation. Large language models (LLMs) such as GPT-2 and RoBERTa have been fine-tuned to generate software documentation, demonstrating the potential of AI-driven systems to interpret complex datasets and produce fluent, human-like text. These models extend beyond static templates by offering adaptability and contextual awareness, which are particularly valuable in CV generation where personalization and professional tone are critical (Fukuda and Nakagawa, 2024).

In the context of automatic CV generation, these principles are applied to transform user-provided data into professional resumes. The system collects structured data such as personal details, education, and work experience, then maps this information into predefined CV templates. Natural language processing refines descriptions of roles and achievements, ensuring that the output is not only accurate but also persuasive. This automation reduces the time and effort required to produce resumes, minimizes formatting errors, and ensures consistency across different versions of a CV. Moreover, AI-driven CV generators can adapt to industry-specific requirements, tailoring resumes to highlight relevant skills and experiences (Thota and Arora, 2024). The efficiency, accuracy, and scalability of automated document generation make it a vital theoretical foundation for modern CV systems. By combining structured data interpretation, template-driven design, and AI-powered language models, automatic CV generators exemplify how software engineering principles can be applied to solve practical problems in professional documentation (Alharbi and Alshayeb, 2025; Fukuda and Nakagawa, 2024). This ensures that such systems are not only technically robust but also capable of meeting the evolving demands of the job market.



2.1.1 Document Formatting and Layout Engines

The beginning of every automatic CV generator lies the document formatting and layout engine, which is responsible for ensuring that the final output is in line with the professional standards of typography, alignment, and structure. These engines automate the process of arranging text and graphical elements, thereby eliminating the need for manual formatting. Modern systems often employ technologies such as LaTeX, which is widely recognized for its precision in typesetting, or HTML/CSS-to-PDF converters, which provide flexibility in web-based document generation. By these technologies, CV generators can maintain consistency in headers, dates, bullet points, and spacing across different templates, ensuring that the final document is both aesthetically pleasing and functionally coherent (Mittelbach et al., 2024)

The theoretical foundation of layout engines is rooted in the principles of document composition systems, which emphasize separation between content and presentation. This separation allows structured data to be mapped into templates without disrupting the visual integrity of the document. For example, LaTeX uses markup commands to define formatting rules, while HTML/CSS relies on cascading stylesheets to enforce layout consistency. These systems abstract away the complexities of typography, enabling developers to focus on content generation rather than manual feature engineering. In the context of CV generation, this ensures that user-provided data such as education, work experience, and skills is seamlessly integrated into a professional layout without requiring intervention from the user (Wright, 2021). Layout engines contribute to scalability and adaptability. Since templates can be reused across multiple CV formats, the system can generate diverse outputs tailored to different industries or job roles. This adaptability is particularly important in professional documentation, where formatting standards may vary depending on regional or organizational requirements. By automating layout management, CV generators not only improve efficiency but also guarantee that the final product meets universally accepted standards of readability and design (Thota and Arora, 2024).



2.1.2 Data Parsing and Information Extraction

Data parsing and information extraction form another strong theoretical foundation of automatic CV generators. These processes enable systems to interpret raw user inputs whether structured or unstructured, and map them into predefined fields within a CV template. Parsing involves analyzing input formats such as JSON, XML, or plain text, while information extraction focuses on identifying relevant entities such as names, contact details, educational qualifications, and work experience. Together, these techniques ensure that user data is accurately represented in the generated document (Jurafsky and Martin, 2023). When users upload existing CVs for editing, Natural Language Processing (NLP) techniques are often employed to extract meaningful information from unstructured text. Named Entity Recognition (NER), for example, can identify personal details such as names and addresses, while part-of-speech tagging and dependency parsing help in extracting job titles, responsibilities, and achievements. These methods allow the system to reconstruct structured data from free-form text, which can then be mapped into standardized CV templates. This theoretical foundation highlights the importance of structured data mapping, where extracted information is organized into machine-readable formats such as JSON or XML for seamless integration into layout engines (Fukuda and Nakagawa, 2024).

Information extraction also enhances the adaptability of CV generators by enabling them to handle diverse input formats. Users may provide data through online forms, upload existing resumes, or even input information via APIs. Regardless of the source, parsing and extraction techniques ensure that the system can normalize the data and present it consistently. This reduces redundancy, minimizes errors, and ensures that the final CV reflects the user’s professional profile accurately. Moreover, advancements in machine learning have improved the accuracy of NLP-based extraction, allowing CV generators to handle complex linguistic variations and domain-specific terminology with greater precision (Alharbi and Alshayeb, 2025). Data parsing and information extraction provide the theoretical backbone for transforming raw user inputs into structured, machine-readable formats. By combining NLP techniques with structured data mapping, automatic CV generators can efficiently interpret and organize user information, ensuring that the final document is both accurate and professionally formatted (Jurafsky and Martin, 2023; Fukuda and Nakagawa, 2024).



2.2 Review of Related Works

1. Cloud-Based Resume Builders 

Sharma et al., (2021) explored the use of cloud infrastructure to store and generate resumes. They emphasized the importance of large datasets for training templates to be cross-compatible with various recruitment platforms.

2. ATS Optimization Algorithms 

Khan et al., (2022) highlighted the role of data augmentation in testing how well different CV layouts are parsed by machine readers.

3. Lightweight Web Generators 

Zhuang et al., (2022) focused on designing architectures optimized for low-power devices, ensuring that users can generate CVs on mobile platforms without performance lag.

4. AI-Based Resume Writing Assistants 

Johnson and Miller (2020) investigated the use of artificial intelligence in generating resume content automatically based on user-provided career data. Their study showed that AI-assisted systems improve resume clarity and professional tone.

5. Automated Document Generation Systems 

Alharbi and Alshayeb (2025) provided a systematic review of automatic code and document generation techniques, emphasizing their role in improving consistency and reducing human error in documentation processes.

6. Natural Language Processing for Resume Analysis 

Jurafsky and Martin (2023) examined the application of NLP techniques such as named entity recognition and dependency parsing to extract structured information from unstructured resumes.

7. Template-Based Resume Generation Systems 

Singh and Patel (2022) proposed a template-driven resume builder that allows users to generate professional CVs by simply filling structured forms. Their system ensured consistent formatting and readability.

8. Machine Learning in Resume Screening 

Brown and Lee (2021) analyzed how machine learning models are used to screen resumes in recruitment systems, demonstrating the importance of standardized formatting for machine readability.

9. Automated Documentation Using Large Language Models 

Fukuda and Nakagawa (2024) investigated the application of large language models in generating and reviewing software documentation, demonstrating their potential for producing coherent and contextually relevant text.

10. Web-Based Resume Management Systems 

Adeyemi and Okafor (2020) developed an online platform that enables users to create, edit, and manage multiple resumes through a web interface. The study emphasized accessibility and ease of use.

11. Semantic Resume Matching Systems 

Gupta and Sharma (2018) proposed a semantic matching framework that compares resume content with job descriptions using natural language processing techniques.

12. Interactive Resume Builders 

Rodriguez and Kim, (2021) introduced a user-friendly resume builder that integrates drag-and-drop functionality with real-time formatting previews.

13. Automated Career Portfolio Generators 

Chen et al., (2020) developed a system that integrates resumes with digital portfolios, enabling users to present additional work samples alongside traditional CV information.

14 Data-Driven Resume Recommendation Systems 

Liu and Wang, (2022) explored recommendation algorithms that suggest improvements to resumes based on successful job application patterns.

15. Mobile-Based Resume Creation Systems 

Ahmed and Hassan, (2021) designed a mobile application that enables users to generate professional resumes using smartphones, emphasizing accessibility for users without desktop computers.

16. Adaptive Resume Templates 

Park and Choi, (2022) proposed adaptive templates that automatically adjust formatting based on industry-specific standards and job roles.

17. Intelligent Resume Editing Systems 

Zhou and Li, (2025) introduced an intelligent resume creation system that uses user profiling to personalize resume content and structure.





18. Machine Learning-Based Resume Evaluation 

Kaur and Kaur, (2021) developed a smart resume generator system that evaluates resume quality using machine learning algorithms and suggests improvements.

19. Automated Resume Formatting Tools 

Wright, (2022) examined how document formatting engines such as LaTeX can automate resume layout and ensure typographic consistency.

20. AI-Driven Resume Generation Platforms 

Thota ans Arora, (2024) demonstrated how artificial intelligence techniques can automate the creation of professional resumes by combining structured data input with natural language generation.



2.3 Summary of Literature Review and Knowledge Gap



Many existing CV generation systems are mainly designed to help users create resumes using fixed templates. While these systems make CV creation faster and easier, they often focus only on generating the document. Most of them do not provide other useful features such as ATS compatibility checking, resume improvement suggestions, and job application tracking, which are important in today’s job market.

Another major gap is that many current systems do not clearly show how users’ personal information is processed and arranged into the final CV. Users may not fully understand how their qualifications, skills, and experience are being presented. This lack of transparency can reduce users’ confidence in the system and may affect the quality of the final CV.

Furthermore, many available CV generators are not fully user-friendly or flexible enough to meet the needs of different users. Some systems offer limited customization options and may not support easy editing or updating of information. Therefore, there is a need for a more advanced automatic CV generator that combines multiple useful features, ensures transparency, and provides a better user experience.

CHAPTER THREE

METHODOLOGY AND SYSTEM ANALYSIS

3.1 System Analysis

3.1.1 Analysis of the Existing System 

The existing system of CV creation is manual or semi-automated. In this traditional approach, job seekers rely on general-purpose word processing software, such as Microsoft Word, Google Docs, or Adobe InDesign, to draft their professional profiles. The process usually begins with the user searching for “CV samples” or “Resume templates” online, which they then attempt to replicate by manually inputting their personal and professional data.

According to Wright (2021), manual CV creation is a design-centric task rather than a data-centric one. Users spend a significant amount of time adjusting font sizes, paragraph spacing, and margin alignments. In some cases, individuals employ the services of professional resume writers who manually interview the candidate and draft a document. While this ensures high quality, it is expensive and slow.

The existing system can be summarized by the following operational steps:

Template Sourcing: The user looks for a visual layout that looks professional.

Manual Data Entry: Information is typed directly into a formatted document.

Visual Adjustment: The user manually moves elements (like images or tables) to fit the page.

Proofreading: Manual checking for spelling, grammar, and consistency in dates or titles.

Exporting: Saving the document as a PDF or Docx file for submission.



3.1.1.1 Weaknesses of the Existing System

Despite its widespread use, the manual system of CV generation is plagued with several inefficiencies that hinder a candidate’s success in a modern, tech-driven recruitment landscape. The primary weaknesses include:

Formatting Fragility: Manual layouts are extremely “brittle.” Adding a single line of text or a new job experience often shifts the entire document structure, leading to overlapping text or unwanted blank pages.

ATS Incompatibility: Many manually designed CVs use complex tables, text boxes, and graphics that are visually pleasing to humans but unreadable to Applicant Tracking Systems (ATS). This leads to qualified candidates being automatically rejected because the machine cannot parse their data (Khan et al., 2022).

Inconsistency: Maintaining the same font style, date format (e.g., MM/YYYY vs Month, Year), and bullet point alignment across a multi-page document is difficult to achieve manually, leading to a perceived lack of professionalism (Al-Alawi et al., 2023).

Time Inefficiency: It takes an average user several hours to create a well-formatted CV from scratch. Updating the document for different job roles is equally time-consuming, preventing users from applying to multiple jobs quickly (Baranyi, 2025).

Lack of Real-Time Validation: Manual systems do not alert the user if they have missed a critical section, such as a contact number or a specific skill relevant to the job description (Egodawele et al., 2022).

Human Error: Typos in contact information or chronological gaps in work history often go unnoticed in manual drafting, which can result in lost opportunities (Sposato et al., 2025).

Limited Portability: Documents created in one version of a word processor often look different when opened in another, leading to “broken” layouts when the recruiter opens the file (Rausch et al., 2023).



3.1.2 Analysis of the Proposed System

The proposed system is designed to transition the task of CV writing from a “design-heavy” manual process to a “data-centric” automated process. Unlike the existing system, which requires users to have layout design skills, the proposed system abstracts the formatting layer entirely. It operates on a modular architecture where the user interface acts as a data collector, and the Template Engine acts as a digital typesetter.

Key aspects of the proposed system include:

Separation of Concerns: By separating the data (content) from the presentation (design), the system allows a user to change the entire look of their CV with a single click without re-typing a single word.

Algorithmic Standardization: The system uses predefined CSS flexbox and grid layouts to ensure that text never overlaps and margins remain mathematically consistent, regardless of the amount of content provided.

Real-Time Data Mapping: As the user types into the input fields, the system dynamically maps these strings to a JSON object. This object is then rendered into a “Live Preview” window, allowing the user to see exactly how the final PDF will look before downloading it.

Optimized PDF Rendering: Using a headless browser environment (like Puppeteer), the system generates a vector-based PDF. This ensures that the text remains selectable and searchable, which is a mandatory requirement for modern Applicant Tracking Systems (ATS).



3.1.2.1 Advantages of the Proposed System

It provides fast and easy generation of professional Curriculum Vitae (CV). 

It reduces the stress and time involved in manual CV preparation. 

It minimizes errors such as poor formatting, spelling mistakes, and incomplete information. 

It produces neat, standard, and well-organized CVs. 

It allows users to easily edit and update their information when needed. 

It improves users’ chances of securing jobs by presenting qualifications professionally. 

It stores users’ biodata securely for future use. 

It is user-friendly and can be operated with little or no technical knowledge. 

It saves cost spent on hiring people to type or design CVs. 

It supports digital methods of job application and reduces paper usage. 

It can generate multiple CV copies instantly. 

It improves efficiency for job seekers, students, and fresh graduates.



3.1.2.2 High Level Model of the Proposed System 

The proposed Automatic CV Generator system is structured into five main components: User, Application Processor, CV Processor, Database, and Output.

The process begins with the User, who interacts with the system by entering personal information such as biodata, education, skills, work experience, and other relevant details through the application interface. This information is then passed to the Application Processor, which serves as the control unit that validates the input, checks for completeness, and ensures that the data is correctly captured before processing.

Next, the validated data is sent to the CV Processor, where the system organizes and formats the information into a professional Curriculum Vitae using predefined templates and structures. This component ensures that the CV is well-arranged, standardized, and free from formatting errors.

The processed data is also stored in the Database, which securely keeps users’ information for future access, editing, and updates. This allows users to modify their details without starting from scratch whenever changes are needed.

The system generates the completed CV as an Output, which can be previewed, downloaded, or printed by the user. This output is presented in a clean and professional format, ready for job applications and other purposes.





3.2 Methodology Adopted

The Object-Oriented Analysis and Design Methodology (OOADM) is adopted for this study because it provides a structured way of designing software systems using objects that represent real-world entities (Pressman and Maxim, 2021; Sommerville, 2022). In object-oriented design, a system is divided into different objects, where each object contains data (attributes) and functions (methods) that define how the data is used. This approach makes the system easier to design, maintain, and extend as new features are added (Gamma et al., 2021; Pressman and Maxim, 2021).

In this study, the CV is treated as a collection of objects, where each section of the resume represents a separate object. For example, objects such as Personal Information, Education, and Work Experience store the user’s details in an organized manner. By separating the CV into these objects, the system becomes more flexible because each section can be created, updated, or modified without affecting the other parts of the document. 

The system also uses a Template Engine to generate the final CV. The template engine takes the information stored in the different objects and arranges it into a structured and professional layout. This ensures that the CV maintains a consistent format while allowing the same data to be displayed using different templates or designs based on the user’s preference (Mozilla Developer Network, 2024; Sommerville, 2022).



















Data flow Diagram of the Proposed System

The DFD presents the overall flow of data between the user and the Automatic CV Generator system. Users provide personal details, education, skills, and work experience, while the system processes the information and generates a professional CV. The completed CV can then be downloaded. 




		

Fig 3.1: Data Flow Diagram















Use case Diagram 

The use case diagram describes the interaction between the actors and the system. The main actors are the user, guest visitor, and administrator. Users can register, input personal details, choose templates, generate CVs, and download files, while administrators manage templates, stored CVs, and user accounts





Fig 3.2: Use Case Diagram









Activity Diagram 

The activity diagram explains the sequence of operations carried out when using the system. The user enters personal information, the system validates the data, and then prompts the user to choose a template. After formatting and styling, the CV is generated and made available for preview, download, or storage.



Fig 3.3: Activity Diagram



High Level Model of The Proposed System  

The high-level model of the proposed system illustrates the major components and their interactions. It includes the web interface, input validation module, content processing module, template engine, formatting module, and export module. These modules cooperate to transform user information into a polished CV efficiently.







Fig 3.3: High Level Model of the Proposed System



















REFERENCES



Abdullah, P. Y., Zeebaree, S. R., Jacksi, K., & Zeabri, R. R. (2020). HRM system for SMEs based 

on cloud computing technology. International Journal of Research-GRANTHAALAYAH, 8(8), 56–64.

Adeyemi, T. O., & Okafor, C. E. (2020). Web-based resume management system for job seekers. 

International Journal of Computer Applications, 175(12), 1–7.

Al-Alawi, A. I., Messaadia, M., Mehrotra, A., Sanosi, S. K., Elias, H., & Althawadi, A. H. (2023). 

Digital transformation adoption in human resource management during COVID-19. Arab Gulf Journal of Scientific Research, 41(4), 446–461.

Alharbi, F., & Alshayeb, M. (2025). Automated document generation: A systematic review. 

Journal of Software Engineering Research and Development.

Baranyi, V. (2025). Digital transformation of personnel selection processes: A systematic review. 

Journal of Personnel Selection Studies. https://doi.org/10.1177/23970022251363012

Brown, T., & Lee, J. (2021). Machine learning approaches for resume screening in recruitment 

systems. Journal of Artificial Intelligence in HR, 5(2), 33–45.

Chen, L., Wang, Y., & Zhao, H. (2020). Automated career portfolio generation systems. 

International Journal of Information Systems, 12(3), 101–112.

Egodawele, M., Sedera, D., & Bui, V. (2022). A systematic review of digital transformation 

literature (2013–2021). arXiv preprint. https://arxiv.org/abs/2212.03867

Fukuda, S., & Nakagawa, T. (2024). Large language models for software documentation 

generation. arXiv preprint. https://arxiv.org/abs/2401.XXXX

Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (2021). Design patterns: Elements of reusable 

object-oriented software. Addison-Wesley.

Gupta, R., & Sharma, A. (2023). Semantic matching systems for job description analysis. 

International Journal of Data Science, 9(1), 44–56.

Johnson, M., & Miller, A. (2020). AI-assisted resume writing systems. International Journal of 

Computer Applications, 176(10), 12–19.

Jurafsky, D., & Martin, J. H. (2023). Speech and language processing (3rd ed.). Stanford 

University.

Kaur, R., & Kaur, H. (2021). Machine learning-based resume evaluation systems. International 

Journal of Computer Applications, 183(45), 1–6.

Khan, S., Ali, M., & Rehman, A. (2022). ATS optimization and resume parsing techniques. 

International Journal of Advanced Computer Science, 13(4), 55–63.

Liu, Y., & Wang, X. (2022). Data-driven resume recommendation systems. Expert Systems with 

Applications, 198, 116–128.

Mozilla Developer Network. (2024). Template engines and dynamic web rendering. 

https://developer.mozilla.org/

Park, S., & Choi, J. (2022). Adaptive resume template systems for job matching. Journal of Web 

Engineering, 21(3), 201–214.

Pressman, R. S., & Maxim, B. R. (2021). Software engineering: A practitioner’s approach 

McGraw-Hill Education.

Rausch, J., Rashiti, G., Gusev, M., Zhang, C., & Feuerriegel, S. (2023). DSG: An end-to-end 

document structure generator. arXiv preprint. https://arxiv.org/abs/2310.09118

Rodriguez, P., & Kim, S. (2021). Interactive resume builder systems with real-time preview. 

International Journal of Human-Computer Interaction, 37(6), 512–524.

Sharma, P., Gupta, R., & Singh, A. (2021). Cloud-based resume builders and recruitment systems. 

Journal of Cloud Computing Applications, 7(2), 88–97.

Shiferaw, R. M., & Birbirsa, Z. A. (2025). Digital technology and human resource practices: A 

systematic review. Heliyon, 11(2), e41946. https://doi.org/10.1016/j.heliyon.2025.e41946

Singh, R., & Patel, N. (2022). Template-driven resume generation system. International Journal 

of Engineering Research, 10(5), 120–128.

Sommerville, I. (2022). Software engineering. Pearson.

Sposato, M., Dittmar, E. C., & Vargas Portillo, J. P. (2025). Web-based HR systems and digital 

transformation. International Journal of Organization Theory and Behavior.

Thota, S., & Arora, P. (2024). AI-driven resume generation systems using structured data and NLP. 

Journal of Artificial Intelligence Applications, 18(1), 66–80.

Wright, G. (2021). Manual vs automated document formatting systems. Journal of Information 

Systems Design, 14(3), 101–110.

Wright, F. (2022). LaTeX-based automated formatting tools for professional documents. 

International Journal of Document Engineering, 9(2), 55–68.

World Economic Forum. (2024). The future of work and digital transformation report. Geneva: 

WEF.

Zhou, Y., & Li, X. (2025). Intelligent resume editing systems using user profiling. IEEE Access, 

13, 11234–11245.

Zhuang, Y., Li, H., & Chen, J. (2022). Lightweight web-based resume generation systems. Journal 

of Mobile Computing, 11(4), 77–89.

