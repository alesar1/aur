# Maintainer: yaminogame <yaminogame at live dot com>
pkgname=baidunetdisk
pkgver=2.0.2
pkgrel=1
pkgdesc="Baidunetdisk Client, converted from .rpm package"
arch=("x86_64")
url="http://pan.baidu.com/"
license=('custom')
depends=()

DLAGENTS=("https::/usr/bin/curl -A 'Mozilla' -fLC - --retry 3 --retry-delay 3 -o %o %u")

source=(
	"https://issuecdn.baidupcs.com/issue/netdisk/LinuxGuanjia/${pkgver}/${pkgname}_linux_${pkgver}.rpm"
	"https://pan.baidu.com/disk/duty/index.html"
)

md5sums=('4f6cd066474fbdd2fc65fcc94dab5342'
	 'SKIP')

options=('!strip')

package() {
  cd ${srcdir}
  cp -r opt usr ${pkgdir}
  install -D -m644 index.html ${pkgdir}/usr/share/licenses/$pkgname/license.html
}
