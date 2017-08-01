# Maintainer: axionl <axionl@aosc.io>
pkgname=filemanager-bin
pkgver=1.0.2
pkgrel=1
pkgdesc="Web File Manager which can be used as a middleware or standalone app."
arch=('i386' 'x86_64')
url="https://github.com/hacdias/filemanager"
license=('Apache-2.0')
depends=('glibc')

source=('filemanager.service'
        'config.json'
        'README.txt')

source_i386=(linux-386-filemanager.tar.gz::https://github.com/hacdias/filemanager/releases/download/v$pkgver/linux-386-filemanager.tar.gz)
source_x86_64=(linux-amd64-filemanager.tar.gz::https://github.com/hacdias/filemanager/releases/download/v$pkgver/linux-amd64-filemanager.tar.gz)

md5sums=('9edb695128abd99b44f9d38fa3a8e5bc'
         '1ec9697d0ba9b77a24e1a623684524d1'
         '3148172145f5db55faeecd0c217c9703')
md5sums_i386=('1fca78d31ef563f926471e2cafa97129')
md5sums_x86_64=('3406da0520989b4b642e2a94d0889be3')


package() {
  dir="$srcdir"
  install -Dm644 filemanager.service ${pkgdir}/usr/lib/systemd/system/filemanager.service
  install -Dm644 config.json ${pkgdir}/etc/filemanager/config.json
  install -Dm755 $dir/filemanager ${pkgdir}/usr/bin/filemanager
  install -Dm644 README.txt ${pkgdir}/usr/share/filemanager/storage/README.txt
}
