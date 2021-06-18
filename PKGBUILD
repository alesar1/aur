# Maintainer: Seth Murphy <seth.murphy18@gmail.com>
# PGP ID: 1DB95DC235C2C613

pkgname='expandrive-bin'
pkgver='2021.6.1'
pkgrel='1'
pkgdesc='A utility for managing multiple cloud storage services'
arch=('x86_64')
url='https://www.expandrive.com/'
license=('custom:proprietary')
depends=(
    'fuse2'
    'gtk3'
    'nss'
    'libxss'
    'gnome-keyring'
)

source=('LICENSE'
    "https://packages.expandrive.com/expandrive/pool/stable/e/ex/ExpanDrive_${pkgver}_amd64.deb")
sha256sums=('dd77a86c9319a5e12b066688a0c804f942fd358b096ad1981eba04426dd16781'
    'c4c014ae9618073718dc488c978a694c7695a2a176dcb563e835cdec905eba71')

prepare() {
    # Create the package directory, if it doesn't already exist
    if [ ! -d "$srcdir/data" ]; then
        mkdir "$srcdir/data"
    else
        # If the directory exists, wipe its contents
        rm -rf "$srcdir/data"
        mkdir "$srcdir/data"
    fi

    tar -xf "$srcdir/data.tar.xz" -C "$srcdir/data"

    # Remove unnecessary files from the package
    rm -rf "$srcdir/data/opt/ExpanDrive/resources/app.asar.unpacked"
}

package() {
    # Copy the source files to the package directory
    cp -R "$srcdir/data/opt/" "$pkgdir/opt/"
    cp -R "$srcdir/data/usr/" "$pkgdir/usr/"

    # Install the LICENSE file in the correct place
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

post_install() {
    # Link the ExpanDrive binary to /usr/local/bin
    ln -sf '/opt/ExpanDrive/expandrive' '/usr/local/bin/expandrive'
}

pre_remove() {
    # Remove ExpanDrive from /usr/local/bin
    rm -f '/usr/local/bin/expandrive'
}
