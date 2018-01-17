# Maintainer: Que Quotion <quequotion@bugmenot.com>
# Contributor: Ramana Kumar <firstname@member.fsf.org>
pkgname=firefox-sync
pkgver=20180118
pkgrel=1
pkgdesc="Speed up Firefox using tmpfs"
arch=('i686' 'x86_64')
url="http://wiki.archlinux.org/index.php/Speed-up_Firefox_using_tmpfs"
license=('GPL')
depends=('rsync' 'firefox')
makedepends=('bash')
source=(${pkgname} "${pkgname}.service")
md5sums=('069e493c9025889787f0181c75f8c727'
         'bc73b9d80232fea8a8bef24bfb125fe6')
package() {
  sed -i "3 c\
LINK=$(ls -d1 ~/.mozilla/firefox/*.default | head -n 1 | xargs basename)
" $pkgname
  install -Dm 755 ${pkgname} ${pkgdir}/usr/bin/${pkgname}
  install -Dm 644 {"${srcdir}","${pkgdir}"/usr/lib/systemd/user}/"${pkgname}".service
}
