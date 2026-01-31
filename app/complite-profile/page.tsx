import ButtonUser from "@/components/button-user";
import RegisterField from "@/components/field/complite-profile-field";

const CompleteProfilePage = () => {
  return (
    <div className="w-full h-screen max-w-xl md:max-w-3xl xl:max-w-6xl mx-auto flex items-center justify-center">
      <div className="flex flex-col w-full md:max-w-md max-w-xs items-center">
        <div className="flex flex-col w-full items-start">
          <h1 className="mb-1 mt-4 text-xl font-semibold">
            Lengkapi data diri
          </h1>
          <p className="text-sm mb-5">
            Selamat datang kembali! Lengkapi untuk lanjut
          </p>
        </div>
        <RegisterField />
        <div className="mt-6 border-t pt-4 w-full max-w-xs">
          <p className="text-center text-xs text-muted-foreground">
            Mengalami masalah saat lengkapi data diri? Hubungi Admin PPI di{" "}
            <span className="font-medium text-primary">@ppi_bartin</span>
          </p>
        </div>
      </div>
      <div className="absolute top-6 right-6">
        <ButtonUser />
      </div>
    </div>
  );
};

export default CompleteProfilePage;
