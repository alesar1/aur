# Maintainer: mh4ckwascut <mh4ckt3mh4ckt1c4s@protonmail.com

pkgname=zaproxy-desktop
pkgver=1
pkgrel=1
pkgdesc='Integrated penetration testing tool for finding vulnerabilities in web applications (desktop icon)'
arch=('x86_64')
url='https://www.owasp.org/index.php/ZAP'
license=('Apache')
depends=('zaproxy')
source=(owasp-zap.desktop
        owasp-zap.png)
sha512sums=('d10f4df37421094fed7aa8d43f3232013bd64603985f3f45cd2788e3deb04c1f0e42f0219ae7385d0e1f5b8e282fe1cdc88d1cf716cc62a99722b543a2e38fdf'
			'99c0b08d782a24ca2a3e1647b52de0e05f72958214937fd54e570d0a52adba9cbdc63e6af30d0774ec6239c60917aa7775d410f49867e2c915a21f1c4dd877e7')

package() {
  install -Dm 644 "${srcdir}"/owasp-zap.png -t "${pkgdir}"/usr/share/pixmaps/
  install -Dm 644 "${srcdir}"/owasp-zap.desktop -t "${pkgdir}"/usr/share/applications/
}

