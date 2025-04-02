import { Footer, FooterBottom } from "@/components/ui/footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4">
      <div className="mx-auto max-w-container">
        <Footer className="pt-0">
          <FooterBottom className="mt-0 flex flex-col items-center gap-4 sm:flex-col md:flex-row">
            <div>© 2025 Bonjour</div>
            <div className="flex items-center gap-4">
              <Dialog>
                <DialogTrigger>Privacy policy</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Data Security</DialogTitle>
                    <DialogDescription>
                    We use reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse. However, no system is 100% secure, and we cannot guarantee absolute security.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>Term Of Service</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Acceptance of Terms</DialogTitle>
                    <DialogDescription>
                      These Terms govern your use of the App and the weather-related services, features, and content provided through it (collectively, "Services"). We may update these Terms from time to time, and the updated version will be effective as of the date posted. Continued use of the App after any changes constitutes your acceptance of the revised Terms.
                    </DialogDescription>
                    <DialogTitle>Eligibility</DialogTitle>
                    <DialogDescription>
                      You must be at least 13 years old to use the App. By using the App, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
                    </DialogDescription>
                    <DialogTitle>License to Use the App</DialogTitle>
                    <DialogDescription>
                      We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes, subject to these Terms. You may not copy, modify, distribute, sell, or lease any part of the App or Services, nor may you reverse-engineer or attempt to extract the source code unless permitted by applicable law.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
