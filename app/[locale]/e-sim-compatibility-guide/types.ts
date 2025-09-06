interface Step {
  description: string | null;
  steps: string[];
  images: string[];
}

interface ModelGroup {
  title: string | null;
  models: string[];
}

interface IBrandESIM {
  brand: string;
  description: string;
  icon: string | null;
  steps: Step[];
  compatibility: string[];
  compatibleModels: ModelGroup[];
  incompatibleModels: ModelGroup[];
}

type IESIMData = IBrandESIM[];

export type { Step, ModelGroup, IBrandESIM, IESIMData };
