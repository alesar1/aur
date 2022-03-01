# Maintainer: Thenujan Sandramohan <sthenujan2002@gmail.com>
pkgname=fcitx5-table-bamini
pkgver=1
pkgrel=1
epoch=
pkgdesc="Bamini tamil language keymap using table"
arch=('any')
url="https://github.com/Thenujan-0/bamini"
license=('GPL')
source=("bamini::git://github.com/Thenujan-0/bamini.git")
sha256sums=('SKIP')
depends=('fcitx5' 'fcitx5-table-other')

package() {
    install -d "$pkgdir/usr/share/fcitx5/inputmethod/"
    install -m644 "$srcdir/bamini/tamil-bamini.conf" "$pkgdir/usr/share/fcitx5/inputmethod/tamil-bamini.conf"
    install -d "$pkgdir/usr/share/fcitx5/table/"
    install -m644 "$srcdir/bamini/tamil-bamini.main.dict" "$pkgdir/usr/share/fcitx5/table/tamil-bamini.main.dict"

    #source this file to check if the environment variables are already configured
    source /etc/environment

    if [ "$GTK_IM_MODULE" = "" ];then
        echo "GTK_IM_MODULE=fcitx">> /etc/environment
    else
        echo "GTK_IM_MODULE is already set"
    fi



    if [ "$QT_IM_MODULE" = "" ];then
        echo "QT_IM_MODULE=fcitx">> /etc/environment
    else
        echo "QT_IM_MODULE is already set"
    fi




    if [ "$XMODIFIERS" = "" ];then
        echo "XMODIFIERS=@im=fcitx">> /etc/environment
    else
        echo "XMODIFIERS is already set"
    fi
}
