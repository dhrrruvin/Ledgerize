import xero from '../../assets/images/software/xero.jpg';
import qb from '../../assets/images/software/quickbook.png';
import myob from '../../assets/images/software/myob.jpg';
import dext from '../../assets/images/software/dext.jpg';
import qbCertification from '../../assets/images/software/qb-certification.png';
import xeroCertification from '../../assets/images/software/xero.png';
import qbCertificationLevel1 from '../../assets/images/software/qblevel1.png';

export interface SoftwareSpecializationData {
     softwareIcon: string;
     softwareName: string;
     certificationName?: string;
     certificationIcon?: string;
}

export interface CertificationsData {
     certificationIcon: string;
}

const softwareSpecializationsData: SoftwareSpecializationData[] = [
     {
          softwareIcon: xero,
          softwareName: "Xero",
          certificationIcon: xeroCertification
     },
     {
          softwareIcon: qb,
          softwareName: 'QB',
          certificationIcon: qbCertification,
          certificationName: 'bookkeeper'
     },
     {
          softwareIcon: myob,
          softwareName: 'MYOB'
     },
     {
          softwareIcon: dext,
          softwareName: 'DEXT'
     },
]

const certificationsData: CertificationsData[] = [
     {
          certificationIcon: xeroCertification
     },
     {
          certificationIcon: qbCertification
     },
     {
          certificationIcon: qbCertificationLevel1
     }
]

export { softwareSpecializationsData, certificationsData };