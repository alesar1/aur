# Maintainer: Alex Szczuczko <alex@szc.ca>

pkgname=wasteland2 #-gog ???
pkgver=2.0.0.2
pkgrel=1
pkgdesc="The Director's Cut of the sequel to an adventure in post-nuclear America"
arch=("i686" "x86_64")
url="https://wasteland.inxile-entertainment.com/store"
license=("custom:commercial")
depends_x86_64=('lib32-gcc-libs' 'lib32-glibc' 'lib32-glu' 'lib32-libx11' 'lib32-libxau' 'lib32-libxcb' 'lib32-libxcursor' 'lib32-libxdmcp' 'lib32-libxext' 'lib32-libxfixes' 'lib32-libxrandr' 'lib32-libxrender' 'lib32-libgl')
depends_i686=('glibc' 'glu' 'libx11' 'libxau' 'libxcb' 'libxcursor' 'libxdmcp' 'libxext' 'libxfixes' 'libxrandr' 'libxrender' 'libgl')
source=("${pkgname}.desktop"
        "gog_wasteland_2_director_s_cut_${pkgver}.sh::file://gog_wasteland_2_director_s_cut${pkgver}.sh")
# bsdtar doesn't seem to like this .sh
noextract=("gog_wasteland_2_director_s_cut_${pkgver}.sh")
sha256sums=("1400b3e11c34cbfc57e3b5cba9501a3319ddb57f066d9d09bb7799a59fb0efc0"
            "6c0a7d606bd8677c999d2b546d9a0f474cfbfe9c7d7eb882d458e6a77f738430")

# Disable compression of the package
PKGEXT='.pkg.tar'

prepare() {
    unzip -qd "$srcdir" "$srcdir/gog_wasteland_2_director_s_cut_${pkgver}.sh" || true
    mv "$srcdir/data/noarch" "$srcdir/Wasteland 2"
}

package() {
    # Binaries
    install -Dm755 "$srcdir/Wasteland 2/game/WL2" "$pkgdir/opt/$pkgname/game/WL2"

    # Data
    # Hardlink files to save the disk space and time spent copying them (they are very large)
    cp -Ral -t "$pkgdir/opt/$pkgname/game/" "$srcdir/Wasteland 2/game/WL2_Data"
    find "$pkgdir/opt/$pkgname/game/WL2_Data" -type d -print0 | xargs -0 chmod 755
    find "$pkgdir/opt/$pkgname/game/WL2_Data" -type f -print0 | xargs -0 chmod 644

    # Docs
    install -m755 -d "$pkgdir/opt/$pkgname/docs/"
    find "$srcdir/Wasteland 2/docs/" -maxdepth 1 -type f -print0 | \
        xargs -0 install -m644 -t "$pkgdir/opt/$pkgname/docs/"

    # Icon
    install -m755 -d "$pkgdir/opt/$pkgname/"
    install -m644 -t "$pkgdir/opt/$pkgname/" "$srcdir/Wasteland 2/support/icon.png"

    #
    # System integration
    #

    # /bin
    install -m755 -d "$pkgdir/usr/bin/"
    ln -s "/opt/$pkgname/game/WL2" "$pkgdir/usr/bin/$pkgname"

    # License
    install -m755 -d "$pkgdir/usr/share/licenses/$pkgname/"
    ln -s "/opt/$pkgname/docs/End User License Agreement.txt" "$pkgdir/usr/share/licenses/$pkgname/EULA"

    # Icon
    install -m755 -d "$pkgdir/usr/share/pixmaps/"
    ln -s "/opt/$pkgname/icon.png" "$pkgdir/usr/share/pixmaps/${pkgname}.png"

    # .desktop File
    install -m755 -d "$pkgdir/usr/share/applications/"
    install -m644 -t "$pkgdir/usr/share/applications/" "$srcdir/${pkgname}.desktop"

    # Doc
    install -m755 -d "$pkgdir/usr/share/doc/"
    ln -s "/opt/$pkgname/docs" "$pkgdir/usr/share/doc/$pkgname"
}
