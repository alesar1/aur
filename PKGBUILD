# Maintainer: Zhu Chuang <genelocated at yandex dot com>

pkgname=nteract-desktop-bin
pkgver=0.21.0
pkgrel=1
pkgdesc='All the power of Jupyter notebooks, wrapped in a native desktop application.'
arch=('x86_64')
url='https://nteract.io/desktop'
license=('BSD')
conflicts=('nteract-desktop')
depends=('python-ipykernel')
options=('!strip')

source=("https://github.com/nteract/nteract/releases/download/v$pkgver/nteract-$pkgver.tar.gz"
        "https://raw.githubusercontent.com/nteract/nteract/v$pkgver/LICENSE"
        "https://raw.githubusercontent.com/nteract/nteract.io/c6a014ac670bdc7a75e80030c0255f77c3bda08f/static/icons/android-icon-192x192.png"
        "nteract.svg"
        "nteract.desktop")
sha256sums=('03090477d06b5c692fb41b14faa9b68374e1fdb29c842a6a6a5636fd9f079d7c'
            '866e6fa48cb8810d36d8d85a3085d7aa1c4317d3731f0ef84919428fee87bf71'
            '3d60b13b503d6a74219d260c144c1de01cf3bc71bed47a8842c4ef87615c132d'
            'SKIP'
            'SKIP')

package() {
    mkdir -p "$pkgdir/usr/lib/"
    cp -r "$srcdir/nteract-$pkgver/" "$pkgdir/usr/lib/nteract/"
    mkdir -p "$pkgdir/usr/bin/"
    ln -sf "/usr/lib/nteract/nteract" "$pkgdir/usr/bin/nteract"
    install -Dm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/nteract/LICENSE"

    install -Dm644 "$srcdir/android-icon-192x192.png" "$pkgdir/usr/share/pixmaps/nteract.png"
    install -Dm644 "$srcdir/nteract.svg" "$pkgdir/usr/share/pixmaps/nteract.svg"
    install -Dm644 "$srcdir/nteract.desktop" "$pkgdir/usr/share/applications/nteract.desktop"
}

