# Maintainer: Randy Ramos <rramos1295 \at\ gmail \dot\ com>

pkgname='responder'
pkgver=2.3.3.8
pkgrel=1
pkgdesc='A LLMNR, NBT-NS and MDNS poisoner, with built-in HTTP/SMB/MSSQL/FTP/LDAP rogue authentication server supporting NTLMv1/NTLMv2/LMv2, Extended Security NTLMSSP and Basic HTTP authentication'
arch=('any')
depends=('python2')
makedepends=('git')
url='https://github.com/lgandx/Responder/'
license=('GPL3')
source=("https://github.com/lgandx/$pkgname/archive/v$pkgver.tar.gz" 'responder.sh')
sha256sums=('42fd6613ce0aebf63716bdb5cb9d99889f24d4af7db711cc9350afba668d25f4'
            '658d17f895ad48a47babf885176a8a4e891219c7fd7d53141a1dbdbbaa0b9374')

package() {
  cd "$srcdir/Responder-$pkgver"

  #Install directory and contents
  install -d "$pkgdir"/usr/share/responder
  cp -ar * "$pkgdir"/usr/share/responder/

  #Docs
  install -Dm644 README.md "$pkgdir"/usr/share/doc/responder/README.md
  install -Dm644 LICENSE "$pkgdir"/usr/share/doc/responder/LICENSE

  #Script
  install -Dm755 "$srcdir"/responder.sh "$pkgdir"/usr/bin/responder
}
