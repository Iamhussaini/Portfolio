import React, { useEffect, useRef } from "react";
import { Box, Typography, Container } from "@mui/material";

const About = () => {
  const ref = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (headingRef.current) {
          headingRef.current.classList.add("fade-in");
        }
      }
    });

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        background: "linear-gradient(62deg,  #2e2e2e 50%, #000000 50%)",
        color: "white",
        py: 8,
        px: { xs: 3, md: 12 },
        textAlign: "center",
      }}
    >
      <style>{`
        .fade-in {
          opacity: 0;
          animation: fadeIn 1.5s ease forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>

      <Container maxWidth="md">
        <Typography
          ref={headingRef}
          variant="h2"
          
          gutterBottom
          className="fade-in"
          fontFamily={"fantasy"}
          letterSpacing={"0.2rem"}
        >
          ABOUT ME
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "#ccc", fontSize: "1.125rem", lineHeight: 1.8 }}
        >
          I'm{" "}
          <Box component="span" sx={{ color: "#2e7375", fontWeight: 600 }}>
            M-Hussain
          </Box>
          , I'm 20 years old and I live in
          <Box component="span" sx={{ color: "#2e7375", fontWeight: 600 }}>
            {" "}
            Gilgit Pakistan
          </Box>
          -SP.
          <Box component="span" sx={{ color: "#2e7375", fontWeight: 600 }}>
            {" "}
            Front-end developer
          </Box>{" "}
          and
          <Box component="span" sx={{ color: "#2e7375", fontWeight: 600 }}>
            {" "}
            UI Designer
          </Box>
          I craft modern, responsive, and pixel-perfect interfaces.
Love turning creative ideas into clean, functional code.
Challenges excite me and push me beyond limits.
From websites to apps — I design, develop, and deliver.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#ccc",
            fontSize: "1.125rem",
            lineHeight: 1.8,
            mt: 3,
          }}
        >
          I have prototyped and developed
          <Box component="span" sx={{ color: "#2e7375", fontWeight: 600 }}>
            {" "}
            Landing Pages
          </Box>
          ,
          <Box component="span" sx={{ color: "#2e7375", fontWeight: 600 }}>
            {" "}
            Sites
          </Box>
          ,
          <Box component="span" sx={{ color: "#2e7375", fontWeight: 600 }}>
            {" "}
            E-commerces
          </Box>
          ,
          <Box component="span" sx={{ color: "#2e7375", fontWeight: 600 }}>
            {" "}
            E-mails Marketing
          </Box>
          ,
          <Box component="span" sx={{ color: "#2e7375", fontWeight: 600 }}>
            {" "}
            Apps
          </Box>{" "}
          and
          <Box component="span" sx={{ color: "#2e7375", fontWeight: 600 }}>
            {" "}
            Programs
          </Box>
          .
        </Typography>
        {/* Internal link back to Navbar/top */}
        <div style={{ marginTop: 32 }}>
          <a href="#home" style={{ color: '#2e7375', textDecoration: 'underline', fontWeight: 600 }}>
            Back to Top
          </a>
        </div>
      </Container>
    </Box>
  );
};

export default About;
