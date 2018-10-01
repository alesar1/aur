# Maintainer: xgdgsc <xgdgsc at gmail dot com>
# Maintainer: Alesandar Trifunović <akstrfn at gmail dot com>

pkgname=mendeleydesktop-bundled
_pkgname=mendeleydesktop
pkgver=1.19.2
pkgrel=4
pkgdesc="Academic software for managing and sharing research papers (desktop client, Qt bundled to solve incompatible Qt for Archlinux)"
url=http://www.mendeley.com/release-notes/
arch=(i686 x86_64)
depends=(qt5-webengine python desktop-file-utils)
license=(custom:mendeley_eula)
provides=(mendeleydesktop)
conflicts=(mendeleydesktop)
source_i686=("https://desktop-download.mendeley.com/download/linux/$_pkgname-$pkgver-linux-i486.tar.bz2")
source_x86_64=("https://desktop-download.mendeley.com/download/linux/$_pkgname-$pkgver-linux-x86_64.tar.bz2")
sha512sums_i686=('b8b8b291a2b2d3cf43ec96005f891b9acd73090c945252b0b22abbc71c631bd74c9cf600c3c5e2c75ee3784a3ac3d06d8d925b5a70a3e47e34901047f67ca587')
sha512sums_x86_64=('ddcbac4f863706f1226157a4528d89801502af6d5af105558ee1b3a5ecad4ba4c90ff64dffd822f485d45670c6ad54cae93f9a582a5bc82bc23e404c767aca40')

if [[ $CARCH = i686 ]];then
$CARCH=i486
fi

package() {
    cd "$_pkgname-$pkgver-linux-$CARCH"

    install -d "$pkgdir/opt/$_pkgname/"
    cp -a bin lib share "$pkgdir/opt/$_pkgname/"

    install -d "$pkgdir"/usr/bin
    ln -s "/opt/$_pkgname/bin/mendeleydesktop" \
          "$pkgdir/usr/bin/mendeleydesktop"

    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
    install -Dm644 share/applications/mendeleydesktop.desktop \
                   "$pkgdir"/usr/share/applications/mendeleydesktop.desktop

    cp -a "$pkgdir/opt/$_pkgname/share/icons" "$pkgdir/usr/share/icons"

    # Clean share from opt (don't remove mendeleydesktop)
    rm -rf "$pkgdir/opt/$_pkgname/share/"{applications,doc,icons}
}

