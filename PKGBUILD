# Maintainer: axionl <axionl@aosc.io>
pkgname=filebrowser-bin
pkgver=1.8.0
pkgrel=3
pkgdesc="Web File Manager which can be used as a middleware or standalone app."
arch=('x86_64')
url="https://github.com/filebrowser/filebrowser"
license=('Apache')
depends=('glibc')
provides=("filebrowser")
conflicts=("filebrowser")
install="$pkgname.install"

source=('filebrowser@.service' 'config.json' 'filebrowser-bin.install'
        'https://raw.githubusercontent.com/hacdias/filebrowser/master/LICENSE')

source_x86_64=(https://github.com/filebrowser/filebrowser/releases/download/v$pkgver/linux-amd64-filebrowser.tar.gz)

sha256sums=('031102764271b433d7910fd13289cf65e9b414f01ae83ff39876f8d642f1172c'
            '211e8101821612d9c142ce05db565379845e735ec8f8891e3fa76111a65db799'
            '82e9879a58d21f4ca4a28315f94ffdadfbbf461752e63252bf12b91de93bc9c8'
            '1fc20cab3a7d67d7997126a98dd151a362dc4600201ca37fd608b959d25985db')
sha256sums_x86_64=('af2684787d0f9ee49e6c66409033e5fa8e609a38780ff9b45f3d53379d6c3d32')

package() {
    install -Dm644 filebrowser@.service ${pkgdir}/usr/lib/systemd/system/filebrowser@.service
    install -Dm644 config.json ${pkgdir}/etc/filebrowser/example.config.json
    install -Dm755 LICENSE ${pkgdir}/usr/share/licenses/filebrowser-bin/LICENSE
    install -Dm755 $srcdir/filebrowser ${pkgdir}/usr/bin/filebrowser
}
# vim set: ts=4 sw=4 et:
