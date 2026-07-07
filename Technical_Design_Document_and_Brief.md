# Project Brief: Automatic CV Generator

## 1. Overview
The Automatic Curriculum Vitae (CV) Generator is a web-based application designed to simplify and automate the process of creating professional, standard, and ATS-friendly CVs. It replaces the traditional, time-consuming manual process of creating CVs using word processors, which often leads to formatting fragility, inconsistencies, and Applicant Tracking System (ATS) incompatibility. 

## 2. Aim & Objectives
**Aim:** To design and implement a web-based automatic CV generator.
**Objectives:**
- Collect relevant user information securely (personal details, education, skills, work experience, achievements).
- Automatically organize collected information into a standard, professional CV format.
- Reduce the difficulties faced by students and job seekers when creating CVs manually.
- Provide a simple, user-friendly platform to quickly generate, preview, and download CVs.

## 3. Target Audience
- Students and fresh graduates needing CVs for SIWES, internships, and entry-level jobs.
- General job seekers looking for an easy-to-use, fast, and error-free CV creation process.
- Recruitment agencies and employers who benefit from reading consistently structured and ATS-compliant CVs.

## 4. Significance
The application promotes the digital transformation of career development by abstracting the formatting layer of CV creation. This means users focus entirely on the content (data-centric) rather than layout (design-centric). It guarantees uniformity, eliminates human formatting errors, and ensures that generated CVs are parseable by modern recruitment systems.

---

# Technical Design Document (TDD)

## 1. System Architecture
The system follows a modular, web-based client-server architecture based on the Object-Oriented Analysis and Design Methodology (OOADM). By treating sections of the CV (e.g., Personal Info, Education) as separate objects, the system maintains high flexibility and maintainability.

### High-Level Components:
- **User Interface (Data Collector):** The front-end module where users input their information via forms.
- **Application Processor (Validation Module):** The controller unit that validates the input data, checks for completeness, and ensures constraints before further processing.
- **CV Processor (Template Engine & Content Processor):** Takes the validated data (JSON objects) and maps it into predefined structured layouts (CSS Flexbox/Grid). It handles the typesetting and dynamic live-preview generation.
- **Database:** A relational database system used to securely store and manage users' profiles, login credentials, and saved CV data for future retrieval or updates.
- **Output (Export Module):** Converts the final rendered HTML/CSS template into a vector-based, searchable PDF file (e.g., using headless browser rendering) for the user to download.

## 2. Technology Stack
- **Front-End:** HTML5, CSS3, JavaScript, jQuery (for dynamic interactions and DOM manipulation).
- **Back-End:** PHP (for server-side logic and form handling).
- **Database:** SQL (MySQL/MariaDB for relational data storage).
- **Architecture Methodology:** Object-Oriented Analysis and Design Methodology (OOADM).

## 3. Data Flow
1. **User Input:** The user registers/logs in and enters their professional data.
2. **Validation:** The system checks the inputs for errors or missing required fields.
3. **Template Selection & Data Mapping:** The user selects a template; the system dynamically maps the data to the template's structured fields.
4. **Storage:** The data is committed to the SQL database.
5. **Generation & Export:** The CV Processor renders the final document, presenting a live preview, and generates a downloadable PDF file.

---

# UI/UX Design Prompts (Skeuomorphic Design Pattern)

Skeuomorphism relies on mimicking real-world materials and objects to provide intuitive cues to the user. For a CV Generator, this means designing the interface to feel like an actual physical desk, complete with paper, folders, and realistic textures.

Here are specific design prompts to guide the creation of a Skeuomorphic UI for the CV Generator:

### Prompt 1: The Virtual Desk Workspace (Dashboard)
**Concept:** The main dashboard should look like a rich, polished mahogany wooden desk. 
**Elements:**
- **Background:** High-definition dark wood texture with subtle reflections.
- **Interactive Elements:** Menus and files should look like physical Manila folders or leather-bound portfolios. 
- **Shadows & Depth:** Use strong drop shadows and lighting highlights to make the folders appear as if they are resting on the desk.

### Prompt 2: The Data Entry Form (The "Notepad")
**Concept:** The input forms where users type their data should resemble a high-quality legal pad or stationary paper.
**Elements:**
- **Texture:** A subtle paper grain background with faint blue ruled horizontal lines and a red vertical margin line.
- **Typography:** Use a handwritten or classic typewriter font (like Courier) for the user's input, while the field labels look like stamped ink or embossed text.
- **Inputs:** Text fields should look slightly indented into the paper (inner shadow), and buttons should look like physical metallic paperclips or sticky notes with peeling corners.

### Prompt 3: Template Selection (The "Filing Cabinet")
**Concept:** The template gallery should feel like flipping through physical documents in a metal filing cabinet.
**Elements:**
- **Visuals:** A metallic brushed-steel texture for the interface container. 
- **Interaction:** Templates are displayed as realistic, slightly dog-eared paper sheets held together by virtual binder clips. 
- **Buttons:** Use raised, tactile buttons with a clear gradient, bevel, and a distinct "click" depressed state when selecting a template.

### Prompt 4: The Live Preview & Export Module (The "Clipboard")
**Concept:** The live preview section should look like a physical wooden clipboard holding a crisp white sheet of A4 paper.
**Elements:**
- **Clipboard:** A textured wood or classic brown particle-board background with a metallic, shiny clip at the top holding the document.
- **The CV:** The paper should have a slight inner shadow at the edges to give it thickness, and maybe a subtle watermark.
- **Download Button:** A heavy, 3D embossed button resembling a physical rubber stamp that says "EXPORT PDF", complete with a stamping sound effect and a quick pressed animation when clicked.
