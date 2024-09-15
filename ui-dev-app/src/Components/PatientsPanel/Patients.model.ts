export interface Patient {
    posts: Post[];
    id?: string;
    patientName: string;
    age: number;
    notes: string;
    socialMediaLink: string;
    generalStatus: PatientStatus;
}

export type AddPatientModalProps = {
    open: boolean;
    handleClose: () => void;
    addPatient: (p: Partial<Patient>) => void;
}

export type PatientsListProps = {
    patients: Patient[];
    deletePatient: (id: string) => void;
}

export type Post = {
    id?: string;
    source: string;
    text: string;
    prediction?: number;
    date: string;
}

export type PatientStatus = 'GOOD' | 'MEDIUM' | 'BAD';

export enum PatientStatuses {
    GOOD = 'GOOD',
    MEDIUM = 'MEDIUM',
    BAD = 'BAD',
}
