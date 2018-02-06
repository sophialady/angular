import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MdIconRegistry, ds: DomSanitizer ) => {
  const imgDir = 'assets/img';
  const avatarDir = `${imgDir}/avatar`;
  const sidebarDir = `${imgDir}/sidebar`;
  const iconDir = `${imgDir}/icons`;
  const dayDir = `${imgDir}/days`;
  ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
  ir.addSvgIcon('unassigned', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/unassigned.svg`));
  ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/project.svg`));
  ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/projects.svg`));
  ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/month.svg`));
  ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/week.svg`));
  ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/day.svg`));
  ir.addSvgIcon('move', ds.bypassSecurityTrustResourceUrl(`${iconDir}/move.svg`));
  ir.addSvgIcon('phone', ds.bypassSecurityTrustResourceUrl(`${iconDir}/phone.svg`));
  ir.addSvgIcon('password', ds.bypassSecurityTrustResourceUrl(`${iconDir}/password.svg`));
  ir.addSvgIcon('date', ds.bypassSecurityTrustResourceUrl(`${iconDir}/date.svg`));
  ir.addSvgIcon('lock', ds.bypassSecurityTrustResourceUrl(`${iconDir}/lock.svg`));
  ir.addSvgIcon('user', ds.bypassSecurityTrustResourceUrl(`${iconDir}/user.svg`));
  ir.addSvgIcon('eimal', ds.bypassSecurityTrustResourceUrl(`${iconDir}/eimal.svg`));
  ir.addSvgIcon('depart', ds.bypassSecurityTrustResourceUrl(`${iconDir}/depart.svg`));
  
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ];
  days.forEach(day => ir.addSvgIcon(`day${day}`, ds.bypassSecurityTrustResourceUrl(`${dayDir}/day${day}.svg`)));
}
