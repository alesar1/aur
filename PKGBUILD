# Maintainer: Frederik Schwan <frederik dot schwan at linux dot com>

pkgname=youtrack
pkgver=2018.3.47078
pkgrel=1
pkgdesc='Issue tracker designed for development teams'
arch=('i686' 'x86_64')
url='http://www.jetbrains.com/youtrack/'
license=('Commercial')
depends=('java-runtime-headless')
backup=('etc/youtrack/youtrack.conf')
options=('!strip')
source=(youtrack-${pkgver}.jar::https://download.jetbrains.com/charisma/${pkgname}-${pkgver}.jar
        youtrack.conf
        youtrack.service
        youtrack.sysusers
        youtrack.tmpfiles)
noextract=('youtrack.jar')
sha512sums=('38ef5ce406b883cd73bd0e3f0e3c0efe013827253d00670d49e920165ae48033644313bd4c92bc4538081d98ca11ade193a522abe8d8e7ab2ac9364aef8c729c'
            '97d2c8ac07fd7903b82c2fc5beac33b38f13aa653f6684f00e40ead854af972a6f2bd2a179062ea27b14c9457aa48f68917acbb54a6a73372d5702a428d4843e'
            'c43c7ded853591ded84a5dff0e319de16fff4ec728b35cc5072b9832bb1a54bb6bb1454a6d75c0d34520f42d47022bbe6afecaf9bef7368f8a99d09fb3b24958'
            'cabd3dedcfa71c888731e3af33b5e9662e4ef3075c2c3d6491adca2003c5d0da85031be2923547170a61aa40d761731581f90dd931ddc95594d33860fe2ca39d'
            'aeedfd34c54cfde2f43375b78452e7abddc63d58d141bbef76f9278a1b1b2f6589b0728a0ed436d0d806ff3ff1ec45ea88d4d58f4a11574401d575808a45ace6')

package() {
  install -d -m 700 "${pkgdir}/var/lib/youtrack/"

  install -Dm755 ${pkgname}-${pkgver}.jar "${pkgdir}"/usr/share/youtrack/${pkgname}.jar
  install -Dm644 ${pkgname}.conf "${pkgdir}"/etc/youtrack/${pkgname}.conf
  install -Dm644 ${pkgname}.service "${pkgdir}"/usr/lib/systemd/system/${pkgname}.service
  install -Dm644 ${pkgname}.tmpfiles "${pkgdir}"/usr/lib/tmpfiles.d/${pkgname}.conf
  install -Dm644 ${pkgname}.sysusers "${pkgdir}"/usr/lib/sysusers.d/${pkgname}.conf
}
