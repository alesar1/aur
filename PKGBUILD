# Contributor: akane      <grangerspit@gmail.com> <xmpp:heiß@neko.im>
# Maintainer:  respiranto <respiranto@icloud.com>
pkgname=dict-freedict-deu-eng
pkgver=0.3.4
pkgrel=1
pkgdesc="German -> English dictionary for dictd from Freedict.org"
arch=('any')
url="http://www.freedict.org/"
license=('GPL')
depends=(dictd)
install=dict-freedict-deu-eng.install
source=("http://sourceforge.net/projects/freedict/files/German%20-%20English/$pkgver/freedict-deu-eng-$pkgver.tar.bz2")
md5sums=('476f304c0b6c0901e67b05daf8bc215e')

package()
{
	mkdir -p $pkgdir/usr/share/dictd
	cp $srcdir/deu-eng/deu-eng.{dict.dz,index} $pkgdir/usr/share/dictd/
}
