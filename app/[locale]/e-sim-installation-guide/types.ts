interface InstallationStep {
  stepNumber: number;
  title: string;
  description: string;
  image?: string;
}

interface ManualStep {
  description: string;
  steps: string[];
}

interface InstallationMethod {
  title: string;
  description: string;
  steps: InstallationStep[];
  manualSetup?: {
    title: string;
    description: string;
    steps: ManualStep[];
  };
  importantNotes?: string[];
}

interface IInstallationGuide {
  brand: string;
  description: string;
  icon: string | null;
  whatYouNeed: string[];
  methods: InstallationMethod[];
  generalTips: string[];
}

type IInstallationData = IInstallationGuide[];

export type {
  InstallationStep,
  ManualStep,
  InstallationMethod,
  IInstallationGuide,
  IInstallationData,
};
