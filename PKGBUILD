# Maintainer: Amish <contact at via dot aur>

pkgname=snort-nfqueue
_pkgname=snort3
_openappid=23020
pkgver=3.1.31.0
pkgrel=1
pkgdesc='A lightweight network IDS / IPS with NFQUEUE and OpenAppID support.'
arch=('i686' 'x86_64')
url='https://www.snort.org'
license=('GPL')
provides=('snort')
conflicts=('snort')
depends=('gperftools' 'hwloc' 'hyperscan' 'libdaq-nfqueue' 'libdnet' 'libmnl' 'libnetfilter_queue' 'libpcap' 'libunwind' 'luajit' 'lz4' 'openssl' 'pcre' 'pulledpork' 'xz' 'zlib')
makedepends=('cmake' 'pkgconf')
backup=('etc/snort/snort.lua'
        'etc/snort/snort_defaults.lua'
        'etc/snort/local.lua'
        'etc/snort/homenet.lua'
        'etc/snort/rules/local.rules'
        'etc/snort/rules/snort.rules'
        'etc/logrotate.d/snort')
install=snort.install
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/snort3/snort3/archive/refs/tags/${pkgver}.tar.gz"
        "snort-openappid-${_openappid}.tar.gz::https://snort.org/downloads/openappid/${_openappid}"
        'local.lua'
        'snort.logrotate'
        'snort.sysusers'
        'snort.tmpfiles'
        'snort.service')
sha256sums=('252b2e7d8b4bfab8daaa1c7ba0396a9dd4d01e64c3b970b091b640f0658a5ae1'
            '8b989b49bac511b5158ef8e05122113100b85aacbd56d10f43d9ad4be350f7ff'
            '9e8b76f180af7d88c92951fb91d3d983c4bdf952700ecb22d157abd5cdc78b16'
            '1be3b4e25138a3696be07929d455ca84bb4eddbee5f596ae636188d49309c7f6'
            'ae3245c5de527fb487c459f2f4a9c78803ae6341e9c81b9a404277679cdee051'
            'bc4a02d184601faba5cd0f6cb454097a3b04a0c8fe56f5f8b36d24513484faa2'
            'e1ff858e2cb062d76f72757746c4f87410151b06221255ca827b7279fee0d5df')

build() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    ./configure_cmake.sh --prefix=/usr --enable-tcmalloc --with-daq-libraries=/usr/lib/daq/ --disable-static-daq
    make -C build
}

package() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    make -C build DESTDIR="${pkgdir}" install

    mv "${pkgdir}"{/usr,}/etc
    install -D -m644 "${srcdir}"/local.lua "${pkgdir}"/etc/snort
    install -D -m644 "${srcdir}"/snort.logrotate "${pkgdir}"/etc/logrotate.d/snort
    install -D -m644 "${srcdir}"/snort.tmpfiles "${pkgdir}"/usr/lib/tmpfiles.d/snort.conf
    install -D -m644 "${srcdir}"/snort.sysusers "${pkgdir}"/usr/lib/sysusers.d/snort.conf
    install -D -m644 "${srcdir}"/snort.service "${pkgdir}"/usr/lib/systemd/system/snort.service
    install -D -m644 /dev/null "${pkgdir}"/etc/snort/rules/snort.rules
    echo "HOME_NET = [[ 10.0.0.0/8 172.16.0.0/12 192.168.0.0/16 ]]" > "${pkgdir}"/etc/snort/homenet.lua
    echo -e '#pulledpork will put rules here in snort.rules\n#alert icmp any any -> any any ( msg:"ICMP Traffic Detected"; sid:10000001; metadata:policy security-ips alert; )' > "${pkgdir}"/etc/snort/rules/local.rules
    chmod 0644 "${pkgdir}"/etc/snort/{homenet.lua,rules/{local,snort}.rules}

    # config for NFQUEUE support, rule files and output logging
    sed -i -e "/^HOME_NET\\s\\+=/ a include 'homenet.lua'" \
      -e 's/^\(HOME_NET\s\+=\)/--\1/g' \
      "${pkgdir}"/etc/snort/snort.lua
    sed -i -e "s/^\\(RULE_PATH\\s\\+=\\).*/\\1 'rules'/g" \
       -e "s/^\\(BUILTIN_RULE_PATH\\s\\+=\\).*/\\1 'builtin_rules'/g" \
       -e "s/^\\(PLUGIN_RULE_PATH\\s\\+=\\).*/\\1 'so_rules'/g" \
       -e "s/^\\(WHITE_LIST_PATH\\s\\+=\\).*/\\1 'lists'/g" \
       -e "s/^\\(BLACK_LIST_PATH\\s\\+=\\).*/\\1 'lists'/g" \
      "${pkgdir}"/etc/snort/snort_defaults.lua

    # OpenAppID files
    install -d -m755 "${pkgdir}"/usr/lib/openappid/custom/{libs,lua,port}
    cp -a --no-preserve=ownership -t "${pkgdir}"/usr/lib/openappid/ "${srcdir}"/odp
}
