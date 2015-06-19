# Contributor: billycongo <billycongo@gmail.com>
# Maintainer: dkaylor <dpkaylor@gmail.com>

pkgname=md5deep
pkgver=4.3
pkgrel=2
arch=('i686' 'x86_64')
pkgdesc="Advanced checksum hashing tool"
url="http://md5deep.sourceforge.net"
license=('Public Domain')

# Copyright and license stuff:
#
# This program is a work of the US Government.
# In accordance with 17 USC 105, copyright protection is not available for any work of the US Government. 
# This program is PUBLIC DOMAIN. Portions of this program contain code that is licensed under the terms of the General Public License (GPL). 
# Those portions retain their original copyright and license. See the file COPYING for more details.
# There is NO warranty for this program; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
#
# md5deep was originally developed by Jesse Kornblum <research (a t) jessekornblum ,,dot. com> during his service as a 
# Special Agent with the United States Air Force Office of Special Investigations (AFOSI).
# As such, md5deep exists in the public domain under 17 USC 105.

depends=('glibc')
source=("http://downloads.sourceforge.net/$pkgname/$pkgname-$pkgver.tar.gz")

md5sums=('f172e686ca1df83a53308ad90f7f706d')
sha1sums=('b9dd6444f07c9fc344ebef201baebdf71bda337f')
sha256sums=('905bcf8bddf0e7e2650b280d5e7af8cb8cd41dad4f299751dfec397dcb4f8d54')
sha512sums=('fe1240e6ae039b18d35a9de0cf15fb77eaac9d5505b6b550eb32858bf6d603f8186de06114d40325d5071640f46cec70795e9c192fa7b6ca9022a12c212a9b14')



build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  ./configure --prefix=/usr
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  make DESTDIR=$pkgdir install
}
