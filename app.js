/* =========================================================
   ResumeMind AI — Professional app.js
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MOBILE MENU
    ========================================= */
    const menuBtn = document.querySelector(".mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active-menu");
            menuBtn.classList.toggle("menu-open");

        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active-menu");
                menuBtn.classList.remove("menu-open");

            });

        });
    }

    /* =========================================
       HEADER SCROLL EFFECT
    ========================================= */
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /* =========================================
       SCROLL REVEAL ANIMATION
    ========================================= */
    const revealElements = document.querySelectorAll(
        ".feature-card, .template-card, .pricing-card, .glass-card, .resume-item, .faq-card, .hero-left, .hero-right, .section-title, .builder-header, .contact-header"
    );

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach((el) => {

        el.classList.add("reveal");
        revealObserver.observe(el);

    });

    /* =========================================
       3D CARD EFFECT
    ========================================= */
    const cards = document.querySelectorAll(
        ".feature-card, .glass-card, .template-card, .pricing-card"
    );

    cards.forEach((card) => {

        card.addEventListener("mousemove", (e) => {

            if (window.innerWidth < 768) return;

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / 18) * -1;
            const rotateY = (x - centerX) / 18;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-6px)
                scale(1.02)
            `;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                translateY(0)
                scale(1)
            `;

        });

    });

    /* =========================================
       BUTTON RIPPLE EFFECT
    ========================================= */
    const buttons = document.querySelectorAll(
        ".btn, .contact-btn, .builder-btn, .template-btn"
    );

    buttons.forEach((btn) => {

        btn.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            const rect = btn.getBoundingClientRect();

            const size = Math.max(rect.width, rect.height);

            ripple.style.width = ripple.style.height = size + "px";

            ripple.style.left =
                e.clientX - rect.left - size / 2 + "px";

            ripple.style.top =
                e.clientY - rect.top - size / 2 + "px";

            ripple.classList.add("ripple");

            btn.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 700);

        });

    });

    /* =========================================
       SCROLL PROGRESS BAR
    ========================================= */
    const progressBar = document.createElement("div");

    progressBar.classList.add("scroll-progress");

    document.body.appendChild(progressBar);

    window.addEventListener("scroll", () => {

        const scrollTop =
            document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            (scrollTop / scrollHeight) * 100;

        progressBar.style.width = progress + "%";

    });

    /* =========================================
       PARALLAX GLOW EFFECT
    ========================================= */
    const glows = document.querySelectorAll(".glow");

    document.addEventListener("mousemove", (e) => {

        glows.forEach((glow, index) => {

            const speed = (index + 1) * 0.015;

            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;

            glow.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    });

    /* =========================================
       AI SUMMARY GENERATE
    ========================================= */
    const aiBtn = document.getElementById("ai-generate");

    if (aiBtn) {

        aiBtn.addEventListener("click", () => {

            const name =
                document.getElementById("builder-name");

            const role =
                document.getElementById("builder-role");

            const summary =
                document.getElementById("builder-summary");

            const skills =
                document.getElementById("builder-skills");

            const aiOutput =
                document.getElementById("ai-output");

            const personName =
                name?.value || "Candidate";

            const personRole =
                role?.value || "Professional";

            const personSkills =
                skills?.value || "HTML, CSS, JavaScript";

            const generatedSummary = `
${personName} is a passionate ${personRole} with strong knowledge of ${personSkills}. Skilled in problem solving, teamwork, communication and modern technologies with a strong learning mindset.
`;

            if (summary && summary.value.trim() === "") {

                summary.value = generatedSummary;

            }

            if (aiOutput) {

                aiOutput.innerHTML = `
                    <strong>AI Summary Generated:</strong>
                    <br><br>
                    ${generatedSummary}
                `;

            }

            updatePreview();

        });

    }

    /* =========================================
       LIVE RESUME PREVIEW
    ========================================= */
    const inputs = document.querySelectorAll(
        "#builder-name, #builder-role, #builder-mobile, #builder-email, #builder-location, #builder-summary, #builder-skills, #builder-experience, #builder-projects, #builder-certifications"
    );

    function updatePreview() {

        const name =
            document.getElementById("builder-name")?.value ||
            "Your Name";

        const role =
            document.getElementById("builder-role")?.value ||
            "Professional Role";

        const mobile =
            document.getElementById("builder-mobile")?.value ||
            "-";

        const email =
            document.getElementById("builder-email")?.value ||
            "-";

        const location =
            document.getElementById("builder-location")?.value ||
            "-";

        const summary =
            document.getElementById("builder-summary")?.value ||
            "Professional summary...";

        const skills =
            document.getElementById("builder-skills")?.value ||
            "HTML,CSS,JavaScript";

        const experience =
            document.getElementById("builder-experience")?.value ||
            "-";

        const projects =
            document.getElementById("builder-projects")?.value ||
            "-";

        const certifications =
            document.getElementById("builder-certifications")?.value ||
            "-";

        document.getElementById("preview-name").textContent =
            name;

        document.getElementById("preview-role").textContent =
            role;

        document.getElementById("preview-mobile").textContent =
            mobile;

        document.getElementById("preview-email").textContent =
            email;

        document.getElementById("preview-location").textContent =
            location;

        document.getElementById("preview-summary").textContent =
            summary;

        document.getElementById("preview-experience").textContent =
            experience;

        document.getElementById("preview-projects").textContent =
            projects;

        document.getElementById("preview-certifications").textContent =
            certifications;

        const skillsContainer =
            document.getElementById("preview-skills");

        if (skillsContainer) {

            skillsContainer.innerHTML = "";

            skills.split(",").forEach(skill => {

                const badge =
                    document.createElement("div");

                badge.className = "skill-badge";

                badge.textContent = skill.trim();

                skillsContainer.appendChild(badge);

            });

        }

    }

    inputs.forEach(input => {

        input.addEventListener("input", updatePreview);

    });

    updatePreview();

const downloadBtn =
document.getElementById("download-pdf");

if(downloadBtn){

downloadBtn.addEventListener(
"click",

async ()=>{

const resume =
document.getElementById(
"resume-preview"
);

const canvas =
await html2canvas(resume,{

scale:2,
useCORS:true,
backgroundColor:"#ffffff"

});

const imgData =
canvas.toDataURL("image/png");

const { jsPDF } =
window.jspdf;

const pdf =
new jsPDF({

orientation:"portrait",
unit:"mm",
format:"a4"

});

const pdfWidth = 210;
const pdfHeight = 297;

pdf.addImage(
imgData,
"PNG",
0,
0,
pdfWidth,
pdfHeight
);

pdf.save(
"ResumeMind-Resume.pdf"
);

});
}
    /* =========================================
       PWA INSTALL
    ========================================= */
    if ("serviceWorker" in navigator) {

        window.addEventListener("load", () => {

            navigator.serviceWorker
                .register("service-worker.js")
                .then(() => {

                    console.log("PWA Installed");

                })
                .catch((err) => {

                    console.log("SW Error", err);

                });

        });

    }

    /* =========================================
       CONSOLE
    ========================================= */
    console.log(
        "%cResumeMind AI",
        "color:#3b82f6;font-size:28px;font-weight:bold;"
    );

});