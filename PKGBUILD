# Maintainer: BullShark <BullShark@github.com>
# Contributor: TheCynicalTeam <TheCynicalTeam@github.com>
pkgname=jspeak
_pkgname=JSpeak
pkgver=2020.7.26
pkgrel=4
pkgdesc='A Text to Speech Reader Front-end that Reads from the Clipboard and with Exceptionable Features '
arch=('any')
url="https://github.com/BullShark/$_pkgname"
license=('GNU General Public License v3.0')
depends=('espeak' 'java-runtime')
optdepends=('mbrola-voices-us1' 'mbrola-voices-us2' 'mbrola-voices-us3' 'mbrola-voices-en1' 'mbrola-voices-af1' 'mbrola-voices-ar1' 'mbrola-voices-ar2' 'mbrola-voices-br1' 'mbrola-voices-br2' 'mbrola-voices-br3' 'mbrola-voices-br4' 'mbrola-voices-bz1' 'mbrola-voices-ca1' 'mbrola-voices-ca2' 'mbrola-voices-cn1' 'mbrola-voices-cr1' 'mbrola-voices-cz1' 'mbrola-voices-cz2' 'mbrola-voices-de1' 'mbrola-voices-de2' 'mbrola-voices-de3' 'mbrola-voices-de4' 'mbrola-voices-de5' 'mbrola-voices-de6' 'mbrola-voices-de7' 'mbrola-voices-de8' 'mbrola-voices-ee1' 'mbrola-voices-es1' 'mbrola-voices-es2' 'mbrola-voices-es3' 'mbrola-voices-es4' 'mbrola-voices-fr1' 'mbrola-voices-fr2' 'mbrola-voices-fr3' 'mbrola-voices-fr4' 'mbrola-voices-fr5' 'mbrola-voices-fr6' 'mbrola-voices-fr7' 'mbrola-voices-gr1' 'mbrola-voices-gr2' 'mbrola-voices-hb1' 'mbrola-voices-hb2' 'mbrola-voices-hn1' 'mbrola-voices-hu1' 'mbrola-voices-ic1' 'mbrola-voices-id1' 'mbrola-voices-in1' 'mbrola-voices-in2' 'mbrola-voices-ir1' 'mbrola-voices-it1' 'mbrola-voices-it2' 'mbrola-voices-it3' 'mbrola-voices-it4' 'mbrola-voices-jp1' 'mbrola-voices-jp2' 'mbrola-voices-jp3' 'mbrola-voices-la1' 'mbrola-voices-lt1' 'mbrola-voices-lt2' 'mbrola-voices-ma1' 'mbrola-voices-mx1' 'mbrola-voices-mx2' 'mbrola-voices-nl1' 'mbrola-voices-nl2' 'mbrola-voices-nl3' 'mbrola-voices-nz1' 'mbrola-voices-pl1' 'mbrola-voices-pt1' 'mbrola-voices-ro1' 'mbrola-voices-sw1' 'mbrola-voices-sw2' 'mbrola-voices-tl1' 'mbrola-voices-tr1' 'mbrola-voices-tr2' 'mbrola-voices-vz1')
source=("https://github.com/BullShark/$_pkgname/releases/download/$pkgver-$pkgrel/$_pkgname.tar.bz2")
sha256sums=('SKIP')

package() {
  mkdir -p $pkgdir/usr/local
	cp -a $srcdir/usr/local/bin $pkgdir/usr/local/bin
  chmod +x $pkgdir/usr/local/bin/$pkgname
  mkdir -p $pkgdir/usr/lib
	cp -a $srcdir/usr/lib/jspeak $pkgdir/usr/lib/jspeak
}