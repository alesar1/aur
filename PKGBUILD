# Contributor: Greg White <gwhite@kupulau.com>
# Maintainer: Greg White <gwhite@kupulau.com>

pkgname=brave-nightly-bin
pkgver=1.47.53
pkgrel=1
pkgdesc='Web browser that blocks ads and trackers by default (nightly binary release).'
arch=('x86_64')
url='https://brave.com/download-nightly'
license=('MPL2')
depends=('gtk3' 'nss' 'alsa-lib' 'libxss' 'ttf-font')
optdepends=('cups: Printer support'
            'pepper-flash: Adobe Flash support'
            'mesa: Hardware accelerated rendering'
            'libglvnd: Support multiple different OpenGL drivers at any given time'
            'libgnome-keyring: gnome keyring support')
provides=("${pkgname}" 'brave-nightly-browser')
conflicts=()
source=("https://github.com/brave/brave-browser/releases/download/v${pkgver}/brave-browser-nightly_${pkgver}_amd64.deb"
        'MPL2::https://raw.githubusercontent.com/brave/browser-laptop/master/LICENSE.txt'
        "$pkgname.sh")
options=(!strip)
sha512sums=('790c78672cded3a0a77de9b0819af4fc5b22b28f91bfcb3e5a04b9d710c8cee954ea4bbac051a8bfdd4cc8e02f32750fd17ad96d46d5f0640967409bb91ce3e9'
            'b8823586fead21247c8208bd842fb5cd32d4cb3ca2a02339ce2baf2c9cb938dfcb8eb7b24c95225ae625cd0ee59fbbd8293393f3ed1a4b45d13ba3f9f62a791f'
            '191500db5dd9692d362745e0055f9ac570c7ca2043edcf3e2eb9dcf8039615022f3459c909ed29d89410886481723d2d439086f1938249674ea32654819190c4')

prepare() {
  mkdir -p brave
  tar xf data.tar.xz -C brave
  # Delete unneeded cron job
  rm -rf brave/opt/brave.com/brave-nightly/cron
  # Use our script to launch (allows overriding flags, sets up data dir)
  sed -i "s/\/usr\/bin\/brave-browser-nightly/\/usr\/bin\/brave-nightly/g" brave/usr/share/applications/brave-browser-nightly.desktop    
}

package() {
    cp -a --reflink=auto brave/opt "$pkgdir/opt"
    cp -a --reflink=auto brave/usr "$pkgdir/usr"
    
    install -Dm0755 "$pkgname.sh" "$pkgdir/usr/bin/brave-nightly"
    install -Dm0644 "brave/opt/brave.com/brave-nightly/product_logo_128_nightly.png" "$pkgdir/usr/share/pixmaps/brave-browser-nightly.png"
    install -Dm0664 -t "$pkgdir/usr/share/licenses/$pkgname" "brave/opt/brave.com/brave-nightly/LICENSE"
    # allow firejail users to get the suid sandbox working
    chmod 4755 "$pkgdir/opt/brave.com/brave-nightly/chrome-sandbox"
}
