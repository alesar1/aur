# Maintainer: Nicholas Schlabach <Techcable@techcable.net>
pkgname=rr-bin
pkgver=5.3.0
pkgrel=1
pkgdesc="Binary record and Replay framework: lightweight recording and deterministic debugging"
arch=('x86_64')
url='http://rr-project.org/'
license=('custom')
depends=('gdb')
source=("https://github.com/mozilla/rr/releases/download/$pkgver/rr-$pkgver-Linux-x86_64.tar.gz" "https://raw.githubusercontent.com/mozilla/rr/$pkgver/LICENSE")
sha256sums=('b7ce8115f6d496a864f9c6d9e9c6cd133034e9d4aca2e343ad841bc4621374de' 'fa03106ff7c9018337f1b489bdec8763a1a19b857466055f77637a0af7181f32')
provides=('rr')
conflicts=('rr' 'rr-git')

package() {
  for binary in 'rr' 'signal-rr-recording.sh' 'rr_page_32' 'rr_exec_stub_32' 'rr_page_64' 'rr_page_32_replay' 'rr_page_64_replay' 'rr_exec_stub'; do
    install -Dm755 "rr-$pkgver-Linux-x86_64/bin/$binary" "$pkgdir/usr/bin/$binary"
  done
  install -Dm755 "rr-$pkgver-Linux-x86_64/lib/rr/librrpreload.so" "$pkgdir/usr/lib/rr/librrpreload.so"
  install -Dm755 "rr-$pkgver-Linux-x86_64/lib/rr/librrpreload_32.so" "$pkgdir/usr/lib/rr/librrpreload_32.so"
  install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/rr/LICENSE"
}
