# Maintainer: ugjka <esesmu@protonmail.com>

pkgname=calendar
pkgver=6.3_20180603
pkgverbase=6.3
pkgrel=1
pkgdesc="Reminder utility (OpenBSD)"
url="http://www.openbsd.org/cgi-bin/cvsweb/src/usr.bin/calendar"
arch=('x86_64')
license=('BSD')
makedepends=("cvs" "openssh")
source=("calendar-1.35-linux.patch"
        "Makefile.linux"
        "LICENSE")
sha256sums=('792b22f398ccf78364c1eb45cb0353599e126b6028b9afa7117e8114444b6f69'
            'a6f24859c760608b5d4f671968abb867bcfab46aa6b8b3f187d19a60b280de5e'
            '95112fa05d9b7204808ede37b1c77469826c8c3875e4b1523307b5050d966564')
TAG="OPENBSD_${pkgverbase/./_}"

pkgver(){
    cd "${SRCDEST}"/${pkgname}
    date=$(cvs -q log -l | awk '/date:/ { gsub("/",""); if ($2 > n) n = $2;} END { print n; }')
    echo "${pkgverbase}_${date}"
}

prepare() {
    cd "${SRCDEST}"
    
    CVS_RSH=ssh ; export CVS_RSH
    cvs -d anoncvs@anoncvs1.ca.openbsd.org:/cvs co \
    -d ${pkgname} -r ${TAG} src/usr.bin/${pkgname}
    
    cp -a ${pkgname} "${srcdir}" 
    
    cd "${srcdir}"/${pkgname}
    patch -p1 < ../calendar-1.35-linux.patch
    
    for c in calendars/*.*/* ; do
        if [ "${c: -3}" == "CVS" ]; then
            continue
        fi
        fromcode="$(grep '^LANG=' "${c}" | sed 's/^LANG=\(.*\)\.\(.*\)\(@.*\)\{0,1\}/\2/')"
        if [ ! -z "${fromcode}" ]; then
            iconv -f "${fromcode}" -t "UTF-8" "${c}" > "${c}.conv"
            mv "${c}.conv" "${c}"
        fi
    done
    
    sed -i 's|/usr/libexec/tradcpp|/usr/bin/cpp|' pathnames.h
    cp ../Makefile.linux Makefile
}

build() {
    cd ${pkgname}
    make
}

package() {
    cd ${pkgname}
    make DESTDIR="${pkgdir}" install
    install -Dm644 ../LICENSE "${pkgdir}"/usr/share/licenses/${pkgname}/LICENSE
}
