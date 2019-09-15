# Maintainer: Zhu Chuang <genelocated at yandex dot com>

pkgname=nteract-desktop-bin
pkgver=0.15.0
pkgrel=2
pkgdesc='All the power of Jupyter notebooks, wrapped in a native desktop application.'
arch=('x86_64')
url='https://nteract.io/desktop'
license=('BSD')
conflicts=('nteract-desktop')
depends=('python-ipykernel')
options=('!strip')

source=("https://github.com/nteract/nteract/releases/download/v$pkgver/nteract-$pkgver.tar.gz"
        "https://raw.githubusercontent.com/nteract/nteract/v$pkgver/LICENSE"
        "https://raw.githubusercontent.com/nteract/nteract/v$pkgver/applications/desktop/static/logoTemplate%403x.png"
        "nteract.desktop")
sha256sums=('cab1da3ba8d325ec8aa7366a5cf75b03a0e5bbde9f24b5f0ac6e3157e0bd7151'
            '866e6fa48cb8810d36d8d85a3085d7aa1c4317d3731f0ef84919428fee87bf71'
            'b86a5ceef994ce2f5d6cd9a15dd9164587bf97f6237fe73304a3f5db660b8eea'
            '7ea096d8c58271e272bb559e60679e168115a1834e0f28693c1031dd608ca19c')

package() {
    mkdir -p "$pkgdir/usr/lib/"
    cp -r "$srcdir/nteract-$pkgver/" "$pkgdir/usr/lib/nteract/"
    mkdir -p "$pkgdir/usr/bin/"
    ln -sf "/usr/lib/nteract/nteract" "$pkgdir/usr/bin/nteract"
    install -Dm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/nteract/LICENSE"

    install -Dm644 "$srcdir/logoTemplate%403x.png" "$pkgdir/usr/share/pixmaps/nteract.png"
    install -Dm644 "$srcdir/nteract.desktop" "$pkgdir/usr/share/applications/nteract.desktop"
}

