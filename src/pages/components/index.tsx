// COMPONENTS
import { CustomButton } from "@/components/button/button";
import { CustomIcon } from "@/components/icons/icon";

// TYPING & ENUM
import { IconName } from "@/components/icons/icon.enum";
import { ButtonColor, ButtonSize, ButtonWidth } from "@/components/button/button.enum";
import { LinkButton } from "@/components/button/link-button";

const ComponentPage = () => {
  return (
    <div className="pt-10 px-8">
      <LinkButton url="/" size={ButtonSize.Tiny}>
        Retour à l&apos;accueil
      </LinkButton>
      <h3 className="text-2xl text-center">En dessous les composants déjà créés 👇</h3>

      <h4 className="mt-10 text-2xl underline">Composant CustomIcon :</h4>
      <div className="flex items-center gap-3 mt-3">
        <CustomIcon name={IconName.ArrowDown} size={32} onClick={() => console.log("je clique")} />
        <CustomIcon name={IconName.At} size={32} />
        <CustomIcon name={IconName.Envelope} size={32} />
        <CustomIcon name={IconName.Eye} size={32} className="text-main" />
        <CustomIcon name={IconName.EyeClose} size={32} />
        <CustomIcon name={IconName.Facebook} size={32} />
        <CustomIcon name={IconName.Instagram} size={32} />
        <CustomIcon name={IconName.Location} size={32} />
      </div>

      <h4 className="mt-10 text-2xl underline">Composant CustomButton :</h4>
      <div className="mt-2">
        <h5 className="text-2xl">Button Primary normal :</h5>
        <div className="flex items-center gap-3 mt-3">
          <div className="flex flex-col gap-2">
            <p>Default :</p>
            <CustomButton>Button</CustomButton>
          </div>
          <div className="flex flex-col gap-2">
            <p>With icon :</p>
            <CustomButton iconName={IconName.Envelope}>Button</CustomButton>
          </div>
          <div className="flex flex-col gap-2">
            <p>Disabled :</p>
            <CustomButton disabled={true}>Button</CustomButton>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p>Full width :</p>
            <CustomButton width={ButtonWidth.Full}>Button</CustomButton>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <h5 className="text-2xl">Button Primary tiny :</h5>
        <div className="flex items-center gap-3 mt-3">
          <div className="flex flex-col gap-2">
            <p>Default :</p>
            <CustomButton size={ButtonSize.Tiny}>Button</CustomButton>
          </div>
          <div className="flex flex-col gap-2">
            <p>With icon :</p>
            <CustomButton size={ButtonSize.Tiny} iconName={IconName.Envelope}>
              Button
            </CustomButton>
          </div>
          <div className="flex flex-col gap-2">
            <p>Disabled :</p>
            <CustomButton size={ButtonSize.Tiny} disabled={true}>
              Button
            </CustomButton>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p>Full width :</p>
            <CustomButton size={ButtonSize.Tiny} width={ButtonWidth.Full}>
              Button
            </CustomButton>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <h5 className="text-2xl">Button Secondary normal :</h5>
        <div className="flex items-center gap-3 mt-3">
          <div className="flex flex-col gap-2">
            <p>Default :</p>
            <CustomButton color={ButtonColor.Secondary}>Button</CustomButton>
          </div>
          <div className="flex flex-col gap-2">
            <p>With icon :</p>
            <CustomButton color={ButtonColor.Secondary} iconName={IconName.Envelope}>
              Button
            </CustomButton>
          </div>
          <div className="flex flex-col gap-2">
            <p>Disabled :</p>
            <CustomButton color={ButtonColor.Secondary} disabled={true}>
              Button
            </CustomButton>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p>Full width :</p>
            <CustomButton color={ButtonColor.Secondary} width={ButtonWidth.Full}>
              Button
            </CustomButton>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <h5 className="text-2xl">Button Secondary tiny :</h5>
        <div className="flex items-center gap-3 mt-3">
          <div className="flex flex-col gap-2">
            <p>Default :</p>
            <CustomButton color={ButtonColor.Secondary} size={ButtonSize.Tiny}>
              Button
            </CustomButton>
          </div>
          <div className="flex flex-col gap-2">
            <p>With icon :</p>
            <CustomButton
              color={ButtonColor.Secondary}
              size={ButtonSize.Tiny}
              iconName={IconName.Envelope}
            >
              Button
            </CustomButton>
          </div>
          <div className="flex flex-col gap-2">
            <p>Disabled :</p>
            <CustomButton color={ButtonColor.Secondary} size={ButtonSize.Tiny} disabled={true}>
              Button
            </CustomButton>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p>Full width :</p>
            <CustomButton
              color={ButtonColor.Secondary}
              size={ButtonSize.Tiny}
              width={ButtonWidth.Full}
            >
              Button
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentPage;
