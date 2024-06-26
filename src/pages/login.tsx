import { Div } from "../utils/styled-components";
import { Grid } from "@mui/material";
import { Caption, Font, Heading } from "../utils/theme/typo";
import { InputField } from "../components/atoms/Input";
import AppButton from "../components/Button";
import { Link } from "react-router-dom";
import PublicWrapper from "../utils/layout/PublicWrapper";
import DisclaimerSection from "../components/sections/disclaimer-section";

const LoginPage: React.FC = () => {
  return (
    <div>
      <PublicWrapper>
        <Grid container>
          {/* left grid with the login form */}
          <Grid item xs={12} md={6}>
            <Div
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                p: {
                  lg: 10,
                  xs: 4,
                },
              }}
            >
              <Heading sx={{ textAlign: "left" }}>
                Log in to the LaserAddict CRM
              </Heading>
              <div style={{ height: 50 }} />
              <Font>Enter your practitioner identifier below</Font>
              <div style={{ height: 30 }} />
              <Font>E-mail address</Font>
              <div style={{ height: 10 }} />
              <InputField />
              <div style={{ height: 20 }} />
              <Font>Password</Font>
              <div style={{ height: 10 }} />
              <InputField type="password" />
              <div style={{ height: 20 }} />
              <Link to="/forget-password">
                <AppButton text="Login" height={50} fullWidth />
              </Link>
              <div style={{ height: 40 }} />
              <Div sx={{ display: "flex", justifyContent: "space-between" }}>
                <Caption>Become a partner</Caption>
                <Caption>Forgotten password</Caption>
              </Div>
            </Div>
          </Grid>
          {/* right grid with a button */}
          <DisclaimerSection />
        </Grid>
      </PublicWrapper>
    </div>
  );
};

export default LoginPage;
