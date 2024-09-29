export interface ProjectsProps {
  setIsArchiveProjects: (value: boolean) => void;
  projectRef?: React.RefObject<HTMLDivElement | null>;
  scrollToSection?: (ref: React.RefObject<HTMLDivElement>) => void;
}
