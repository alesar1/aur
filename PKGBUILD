# Maintainer: Janosch Dobler <janosch.dobler@gmx.de>
pkgname=pac_manage
pkgver=1.3
pkgrel=1
pkgdesc="pacman/yaourt helper - manage packages in a single file"
arch=('x86_64')
url="https://github.com/jandob/pac_manage"
license=('WTFPL')
depends=('pacman' 'yaourt' 'bash' 'sed')
source=('pac_manage.sh')
md5sums=('1d6512d6a514eef4d31e7734eb92eabe')

package() {
    install -Dm755 pac_manage.sh "${pkgdir}/usr/bin/pac_manage"
}
