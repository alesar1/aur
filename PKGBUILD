# Maintainer: Tim Diels <timdiels.m@gmail.com>
pkgname=2plan-desktop
pkgver=2.5
pkgrel=2
pkgdesc="A free closed-source project management system"
url='http://2-plan.com/free-project-management-software-2-plan-desktop.html'
arch=('x86_64')
license=('custom')
depends=('java-environment')
source=('http://download.2-plan.com/linux64.zip')
md5sums=('a13495fae8e2e45ddcb3ee0675fe9b80')

package() {
  install_dir="${pkgdir}/usr/share/2-plan/"

  install -d "$install_dir"
  cp -r  "${srcdir}/2-plan/"* "$install_dir"

  install -d "${pkgdir}/usr/bin"
  ln -s "/usr/share/2-plan/2-plan" "${pkgdir}/usr/bin/2-plan"
}
