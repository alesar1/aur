pkgname=dina-powerline
pkgver=1.0
pkgrel=1
pkgdesc="Modified versions of all Dina 13 font variants for use with vim-powerline."
arch=(any)
depends=(fontconfig xorg-font-utils)
source=("https://github.com/tampix/Dina-Powerline/archive/master.zip")
sha256sums=("32e7fbdc2cfcdc8f0fdd4770736fecb63d5f885d6c15d82c710d37d139909db9")
install=$pkgname.install

build() {
    cd "Dina-Powerline-master/fonts"
    for f in *.bdf; do
        FILE_NAME=$(basename $f '.bdf')
        PCF_FILE="$FILE_NAME.pcf"
        bdftopcf $f -o "$PCF_FILE"
        gzip -f $PCF_FILE
    done
}

package() {
    install -d "$pkgdir/usr/share/fonts/misc"
    install -m644 "$srcdir/Dina-Powerline-master/fonts"/*.pcf.gz "$pkgdir/usr/share/fonts/misc/"
}
