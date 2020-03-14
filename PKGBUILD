# Maintainer: Amish <contact at via dot aur>
pkgname=nftables-geoip-db
pkgver=2.0
pkgrel=1
pkgdesc="GeoIP Database for nftables"
arch=('any')
license=('BSD' 'GPL')
makedepends=('perl-text-csv-xs' 'perl-net-cidr-lite')
_xtver=3.9
_dbip_date=`date +%Y-%m`

# if you want to use MaxMind DB instead of DB-IP then,
# create a file named geoip.license.key which contains MaxMind License key in following format:
#_maxmind_key=XXXX
source geoip.license.key

if [[ -z "${_maxmind_key}" ]]; then
    url="https://db-ip.com/db/download/ip-to-country-lite"
    source="dbip-country-lite.csv.gz::https://download.db-ip.com/free/dbip-country-lite-${_dbip_date}.csv.gz"
    _dbsource="DB-IP"
else
    url="https://dev.maxmind.com/geoip/geoip2/geolite2/"
    source="GeoLite2-Country-CSV.zip::https://download.maxmind.com/app/geoip_download?edition_id=GeoLite2-Country-CSV&suffix=zip&license_key=${_maxmind_key}"
    _dbsource="MaxMind GeoLite2"
fi
source+=("xt_geoip_build::https://sourceforge.net/p/xtables-addons/xtables-addons/ci/v${_xtver}/tree/geoip/xt_geoip_build?format=raw"
        "xt_geoip_build.patch"
        "README"
        "mmcsv_geoip_build")
sha256sums=('SKIP'
            '6bd72c83973a104481c1bdfb634916ca1c446924d1307e69088702dfe77b7dcf'
            '6921a708dd944c63b1944695cacc485d60129bf0f0a7f8b61b27a7bced0ba6d4'
            'e5eae57ae28136d17af6fde3f06ad732067f873f95f27dc24fba936bb32efc40'
            'cb32484f8030a4eab7fd0b5ffc028a31e46c1b3ec49d818a09e2cbf473f39f17')
install=nft_geoip.install

prepare() {
    cd "${srcdir}"
    if [[ -z "${_maxmind_key}" ]]; then
        cp xt_geoip_build nft_geoip_build
        patch nft_geoip_build xt_geoip_build.patch
    else
        cp mmcsv_geoip_build nft_geoip_build
    fi
    echo Using ${_dbsource} GeoIP database
}

package() {
    if [[ -z "${_maxmind_key}" ]]; then
        cd "${srcdir}"
    else
        cd "${srcdir}"/GeoLite2-Country-CSV_*
    fi
    install -d -m 755 "${pkgdir}"/etc/nftables.d/geoip
    install -d -m 755 "${pkgdir}/usr/share/doc/${pkgname}" "${pkgdir}"/usr/share/nft_geoip
    perl "${srcdir}"/nft_geoip_build -D "${pkgdir}"/usr/share/nft_geoip
    install -Dm644 -t "${pkgdir}/usr/share/doc/${pkgname}" "${srcdir}"/README
    sed -i -e "s/@@@DBSOURCE@@@/${_dbsource}/g" "${pkgdir}/usr/share/doc/${pkgname}/README"
}
