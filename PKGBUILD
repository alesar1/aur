# Maintainer: Tim Diels <timdiels.m@gmail.com>
pkgname=2plan-desktop
pkgver=2.6.0  # Look in Help > About > Installation details
pkgrel=2
pkgdesc="A free closed-source project management system"
url='http://2-plan.com/free-project-management-software-2-plan-desktop.html'
arch=('x86_64')
license=('custom')
depends=('java-environment')
source=('http://download.2-plan.com/linux64.zip')
sha512sums=('1a4965cc4521bb10072c5830251d66e40570c482399d2d0f5f25d86d9faf6fc05fed65e53504f19d170457d85c9f817acc591db56f6f3163e47af89ef068cfc0')

package() {
  install_dir="${pkgdir}/usr/share/2-plan/"

  install -d "$install_dir"
  cp -r  "${srcdir}/2-plan/"* "$install_dir"

  install -d "${pkgdir}/usr/bin"
  ln -s "/usr/share/2-plan/2-plan" "${pkgdir}/usr/bin/2-plan"
}
