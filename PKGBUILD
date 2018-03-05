# Maintainer: Bernd Kast < kastbernd at gmx dot de >

pkgname=r8169aspm-dkms
pkgver=v4.15.2
pkgrel=2
pkgdesc="Driver for Realtek Ethernet chips with aspm enabled for power saving"
arch=('any')
url="https://github.com/KastB/r8169"
license=('GPL')
depends=('dkms')
makedepends=('git')
replaces=()
conflicts=()
options=(!strip)
_pkgname="r8169_aspm"
source=("$_pkgname::git+https://github.com/KastB/r8169.git"
        "dkms.conf"
        "blacklist-r8169-dkms.conf")
               
sha256sums=('SKIP'
            '15f16660a1a57337a78e3753d265510920857d84e9e3dd41df38fa9366806c95'
            '47c992bfbd98403d9aa80b5ed00408af43c57ab0f5960f270d9d9b9f000618b3')

package() {
       
        installDir="$pkgdir/usr/src/$_pkgname-$pkgver"
       
        install -dm755 "$installDir"
        install -m644 "$srcdir/dkms.conf" "$installDir"
        install -dm755 "$pkgdir/etc/modprobe.d"
        install -m644 "$srcdir/blacklist-r8169-dkms.conf" "$pkgdir/etc/modprobe.d/blacklist-r8169-dkms.conf"
       
        cd "${srcdir}/${_pkgname}/"

		rm -fr .git*

        for d in `find . -type d`
        do
                install -dm755  "$installDir/$d"
        done
       
        for f in `find . -type f ! -name 'README.md' ! -name '.gitignore'`
        do
                install -m644 "${srcdir}/${_pkgname}/$f" "$installDir/$f"
        done
}
