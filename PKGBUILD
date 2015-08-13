# Maintainer: Tblue <tilman (at) ax86 (dot) net>
# Contributor: lanrat

pkgname='fortune-mod-bofh-excuses'
pkgver=20121125.190600
pkgrel=2
pkgdesc='BOFH excuses fortune cookie files'
arch=('any')
url='http://www.cs.wisc.edu/~ballard/bofh/'
depends=('fortune-mod')
makedepends=('curl')
groups=('fortune-mods')
license=('Public domain')

_dlurl='http://pages.cs.wisc.edu/~ballard/bofh/excuses'

pkgver()
{
    # Make a HTTP HEAD request and use the Last-Modified header of the data file
    # to generate the pkgver. Thanks to djmattyg007 for the idea (and the hint that
    # the Debian package I used previously is somewhat outdated by now :-)!

    msg2 "Determining data file's time of last modification..."
    local lastmod=$(curl -fL -I "${_dlurl}" | tac | sed -n '/^Last-modified:[[:space:]]*/I { s///p; q }')

    if [ -z "$lastmod" ]; then
        warning "Could not determine time of last modification, not updating pkgver."
        return 1
    fi

    date -ud "${lastmod}" '+%Y%m%d.%H%M%S' || { warning "Failed to generate pkgver, it will not be updated."; return 1; }
}

prepare()
{
    msg2 "Downloading data file..."
    curl -fL -o "${srcdir}/bofh-excuses.raw" "${_dlurl}"
}

build()
{
    cd "${srcdir}"

    awk '{ printf "BOFH excuse #%d:\n\n%s\n%%\n", FNR, $0 }' \
        bofh-excuses.raw > bofh-excuses
    strfile ./bofh-excuses
}

package()
{
    cd "${srcdir}"
    
    install -D -m644 bofh-excuses "${pkgdir}/usr/share/fortune/bofh-excuses"
    install -D -m644 bofh-excuses.dat "${pkgdir}/usr/share/fortune/bofh-excuses.dat"
}
