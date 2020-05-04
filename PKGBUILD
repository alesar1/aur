# Maintainer: peippo <christoph+aur@christophfink.com>

pkgname="nominatim"
pkgdesc="Geocoding tool using OpenStreetmap data"
url="https://nominatim.org"

pkgver=3.4.2
pkgrel=0

arch=("x86_64")
license=("GPL2")

makedepends=(
    "clang"
    "cmake"
    "libxml2"
)
depends=(
    "boost"
    "boost-libs"
    "expat"
    "git"
    "php"
    "php-intl"
    "php-pgsql"
    "postgis"
    "postgresql"
    "proj"
    "pyosmium"
)
optdepends=(
    "nominatim-data-wikipedia: optional auxiliary data source to help indicate the importance of OSM features"
    "nominatim-data-postcodes-gb: improve searches that involve a UK postcode"
    "nominatim-data-postcodes-us: improve searches that involve a US postcode"
)
# checkdepends=(
#     "php-codesniffer"
#     "phpunit"
#     "python-behave"
#     "python-nose"
#     "python-pip"
#     "python-psycopg2"
#     "python-setuptools"
#     "python-tidylib"
# )

source=(
    "https://nominatim.org/release/Nominatim-${pkgver}.tar.bz2"
    "${pkgname}.sysusers"
    "${pkgname}.tmpfiles"
    "apache.conf"
    "php.ini"
    "settings-local.php"
    "webapps-paths.patch"
)
sha256sums=(
    "5c3d103611956cc9ec114e41cba8c9688cac7f3937f7f26d3cf207eef1823f0c"
    "7f71b5217cbe0713fa5f8baa138348c9cd49f42c2b6025c059076042e0c04c6d"
    "50bf612ad951bcf3c1969aa79b0c7ab78745983720bc5f2deb37d1704c0e37d8"
    "8dd94ea1a88156bc55dc41e4f4df878df4f28c23c31bfda36c89470e2f5997d0"
    "37c4b17463f8317d39bb741b07bbb693afc0bbf584eec590f89b849542b98b7d"
    "c51857c2aa9d1373b5b66cd695b9b30a916ecd05570d92cf631af5efc63ed472"
    "e35272be9414661c79659da8bd1c8028e859c460efbf52236a4bb84f018b9a57"
)

install="${pkgname}.install"
backup=(
    "etc/webapps/${pkgname}/settings/local.php"
)

prepare() {
    mkdir -p "${srcdir}/build"
    patch -d "${srcdir}/Nominatim-${pkgver}" -p1 < webapps-paths.patch
}

build() {
    cd "${srcdir}/build"
    cmake \
        -DCMAKE_INSTALL_PREFIX="/usr" \
        "../Nominatim-${pkgver}"
    make
}

# check() {
#     cd "${srcdir}/Nominatim-${pkgver}/test"
#     make
# }

package() {
    cd "${srcdir}/build"
    make DESTDIR="${pkgdir}/" install

    # install is a bit of a mess;
    # upstream instructs to run from build and src
    # directory, which does not sound like the
    # thing I’d want to do.

    # (see also my patch to change the directories
    # hardcoded in (src)/settings/defaults.php)

    # directories to copy from source dir to /var/lib
    for _dir in \
        "data" \
        "data-sources" \
        "lib" \
        "munin" \
	    "settings" \
        "sql" \
        "utils" \
        "website" \
        "wikidata"
    do
        install \
            -Ddm755 \
            "${pkgdir}/var/lib/${pkgname}/src/${_dir}"
        cp -aR \
            "${srcdir}/Nominatim-${pkgver}/${_dir}" \
            "${pkgdir}/var/lib/${pkgname}/src/"
    done

    # directories to copy from build dir to /var/lib
    for _dir in \
	    "utils"
    do
        install \
            -Ddm755 \
            "${pkgdir}/var/lib/${pkgname}/bin/${_dir}"

        cp -aR \
            "${srcdir}/build/${_dir}" \
            "${pkgdir}/var/lib/${pkgname}/bin/"
    done

    # directories to copy from build to /usr/share/webapps
    for _dir in \
        "website"
    do
        install \
            -Ddm755 \
            "${pkgdir}/usr/share/webapps/${pkgname}/${_dir}"

        cp -aR \
            "${srcdir}/build/${_dir}" \
            "${pkgdir}/usr/share/webapps/${pkgname}/"
    done

    # directories to copy from build to /etc/webapps/
    for _dir in \
        "settings"
    do
        install \
            -Ddm755 \
            "${pkgdir}/etc/webapps/${pkgname}/${_dir}"

        cp -aR \
            "${srcdir}/build/${_dir}" \
            "${pkgdir}/etc/webapps/${pkgname}/"
    done

    # single files (binaries) to copy to /var/lib
    install -Dm755 "${srcdir}/build/module/nominatim.so" -t "${pkgdir}/var/lib/${pkgname}/bin/module/"
    install -Dm755 "${srcdir}/build/nominatim/nominatim" -t "${pkgdir}/var/lib/${pkgname}/bin/nominatim/"

    # repair symlinks pointing to ${srcdir}
    for _link in \
        "css" \
        "images" \
        "js"
    do
        rm "${pkgdir}/usr/share/webapps/${pkgname}/website/${_link}"
        ln -sf "/var/lib/${pkgname}/src/website/${_link}" "${pkgdir}/usr/share/webapps/${pkgname}/website/${_link}"
    done

    # link settings from /etc/webapps
    install -Ddm755 "${pkgdir}/etc/webapps/${pkgname}/"
    ln -s "/etc/webapps/${pkgname}/settings/" "${pkgdir}/var/lib/${pkgname}/bin/settings"
    # and from /usr/share/webapps/
    ln -s "/etc/webapps/${pkgname}/settings/" "${pkgdir}/usr/share/webapps/${pkgname}/settings"

    # install package settings
    install -Dm644 "${srcdir}/settings-local.php" "${pkgdir}/etc/webapps/${pkgname}/settings/local.php"

    # install apache and php config
    install -Dm644 "${srcdir}/apache.conf" -t "${pkgdir}/etc/webapps/${pkgname}"
    install -Dm644 "${srcdir}/php.ini" "${pkgdir}/etc/php/conf.d/nominatim.ini"

    # create users and directories
    install -Dm 644 "${srcdir}/${pkgname}.sysusers" "${pkgdir}/usr/lib/sysusers.d/${pkgname}.conf"
    install -Dm 644 "${srcdir}/${pkgname}.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/${pkgname}.conf"
}
