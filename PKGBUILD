# Maintainer: David Runge <dvzrv@archlinux.org>
# Contributor: Ruben Kelevra <ruben@freifunk-nrw.de>
# Contributor: Timothée Ravier <tim@siosm.fr>
# Contributor: Jonas Heinrich <onny@project-insanity.org>

pkgname=etherpad-lite
pkgver=1.8.17
pkgrel=1
epoch=1
arch=(x86_64)
pkgdesc="Lightweight fork of etherpad based on javascript"
url="https://etherpad.org"
license=(Apache)
depends=(coffeescript nodejs)
makedepends=(npm libsecret)
optdepends=('sqlite: to use sqlite as databse'
            'mariadb: to use mariadb as database'
            'postgresql: to use postgresql as database'
            'abiword: advanced import/export of pads'
            'libreoffice: advanced import/export of pads'
            'tidy: improve quality of exported pads')
conflicts=(etherpad-lite-git)
backup=("etc/${pkgname}/settings.json"
        "etc/${pkgname}/credentials.json"
        "etc/${pkgname}/APIKEY.txt"
        "etc/${pkgname}/SESSIONKEY.txt")
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/ether/${pkgname}/archive/${pkgver}.tar.gz"
        "${pkgname}-sysusers.conf"
        "${pkgname}-tmpfiles.conf"
        "${pkgname}.service")
sha512sums=('02e458732f7082b4e8f05672b893e3d4ad42ecc209e5ba2e404c69e60ae8e2eba6fc55452508e8f75aeb0fdef3e95aace35f4a424ffd33b9da3335315a8d7d1d'
            '8c9093cc82acb814023b60eecffae7cb697abfa6193a68ca068f010baf3bf1e5f1678bdb862f4af370badbd71deb6a8499f61c8b6115d280477db1b3fd895dfd'
            'f1be6d7094ea0dd267fba21c7c64017de6a63974e193720100d49eba07170a078d43f0b76c96e6453b8e9e94cdc24b36fb7ab14218598d65d1455418daf9e447'
            'db3f27c2bed7cc84910154da8851daf32ea248aeaca5026c9c4cf138841b921498a0c39d4f9b635d6686d13ac498399e4657563867d87d406ff6b8b6d9dd0d28')
b2sums=('313b21baefdad6f2958cceabc6a96ffc4e57763c928dd760d25d26d2b2caa592ac0b7169cdcd81745252e5d51aa4170a2a01c24c1053abdda0ea207636f10930'
        'cb519b7d749982d899037445be36dc54754c523ee7aaa3f7d005b4cea4dd74c1596535b17bfdd6910923e4f723ee02c625d579966a601b84ca1b1eeb82fe932e'
        '88f0f7b9bbc64b853e3169cc9627b64c4b5aaef7238553ed110f82ebd40e1f8b0078d17a69adee6a37f6d59f6eb0871fc209a1fb6e4b71b7ac5239071db2eec7'
        '12c3be8037959b0613adc82a5632845a79c966a6c9ccbadffd103c30c5cb951c0d31e2cc8f2cfce5ebcaba847baf168584cd6dac4a76c0d14b0d534f1c82219b')

prepare() {
  cd "${pkgname}-${pkgver}"
  # create needed initializing file
  touch src/.ep_initialized
  # write dirty.db to StateDirectory by default
  sed -i 's/var\/dirty.db/\/var\/lib\/etherpad-lite\/dirty.db/g' \
    settings.json.template
  # create empty APIKEY.txt, SESSIONKEY.txt
  touch {APIKEY,SESSIONKEY}.txt
  # create a valid (but empty) credentials.json file
  echo "{}" > credentials.json
  # create needed symlink because setup is weird
  mkdir -v node_modules && cd node_modules
  ln -vs ../src "ep_${pkgname}"
}

build() {
  cd "${pkgname}-${pkgver}"
  (
    cd src
    # required node modules
    echo "Installing with npm"
    npm install --cache "${srcdir}/npm-cache"
    npm audit || echo "npm audit output might return non-zero"
  )
  find . -type f \
          \( \
         -iname '*.1' -o \
         -iname '*.5' -o \
         -iname '*.7' -o \
         -iname '*info' -o \
         -iname '*.py' -o \
         -iname '*samples' \
         \) \
         -delete
  find . -type d \
          \( \
         -iwholename '*/man1' -o \
         -iwholename '*/man5' -o \
         -iwholename '*/man7' -o \
         -iwholename '*/man' \
         \) \
         -delete
}

package() {
  depends+=(libsecret-1.so)

  cd "${pkgname}-${pkgver}"
  # removing unneeded files and directories
  find src -type f \
          \( \
         -iname '*Dockerfile*' -o \
         -iname '*Makefile*' -o \
         -iname '*appveyor.yml' -o \
         -iname '*.babelrc' -o \
         -iname '*.bak' -o \
         -iname '*bower.json' -o \
         -iname '*.c' -o \
         -iname '*.cc' -o \
         -iname '*.cpp' -o \
         -iname '*.md' -o \
         -iname '*.markdown' -o \
         -iname '*.rst' -o \
         -iname '*.nycrc' -o \
         -iname '*.npmignore' -o \
         -iname '*.editorconfig' -o \
         -iname '*.el' -o \
         -iname '*.eslintignore' -o \
         -iname '*.eslintrc*' -o \
         -iname '*.fimbullinter.yaml' -o \
         -iname '*.gitattributes' -o \
         -iname '*.gitmodules' -o \
         -iname '*.h' -o \
         -iname '*.jshintrc' -o \
         -iname '*.jscs.json' -o \
         -iname '*.log' -o \
         -iname '*logo.svg' -o \
         -iname '*.nvmrc' -o \
         -iname '*.o' -o \
         -iname '*package-lock.json' -o \
         -iname '*.travis.yml' -o \
         -iname '*.prettierrc' -o \
         -iname '*.sh' -o \
         -iname '*.tags*' -o \
         -iname '*.tm_properties' -o \
         -iname '*.wotanrc.yaml' -o \
         -iname '*tsconfig.json' -o \
         -iname '*yarn.lock' \
         \) \
         -delete
  find src -type d \
          \( \
         -iwholename '*.github' -o \
         -iwholename '*.tscache' -o \
         -iwholename '*/man' -o \
         -iwholename '*/test' -o \
         -iwholename '*/scripts' -o \
         -iwholename '*/git-hooks' \
         \) \
         -exec rm -rvf {} +
  find src -empty -type d -delete
  # install initialization file
  install -vDm 644 "src/.ep_initialized" -t "${pkgdir}/usr/share/${pkgname}/src/"
  # node modules
  cp -av node_modules "${pkgdir}/usr/share/${pkgname}/"
  # protect configuration directory with restrictive permission
  install -vdm 755 "${pkgdir}/etc/${pkgname}"
  install -vdm 755 "${pkgdir}/etc/${pkgname}/no-skin"
  # custom js and css templates
  install -vDm 644 "src/static/skins/no-skin/"*.{css,js} -t "${pkgdir}/etc/${pkgname}/no-skin"
  rm -rv src/static/skins/no-skin/
  # move sources
  cp -av src/* "${pkgdir}/usr/share/${pkgname}/src/"
  # symlink directory for custom css and js
  ln -vs "/etc/${pkgname}/no-skin/" "${pkgdir}/usr/share/${pkgname}/src/static/skins/"
  # configuration
  install -vDm 640 settings.json.template "${pkgdir}/etc/${pkgname}/settings.json"
  install -vDm 640 credentials.json -t "${pkgdir}/etc/${pkgname}"
  install -vDm 640 {APIKEY,SESSIONKEY}.txt -t "${pkgdir}/etc/${pkgname}"
  # symlink configuration files
  ln -vs "/etc/${pkgname}/credentials.json" "${pkgdir}/usr/share/${pkgname}/credentials.json"
  ln -vs "/etc/${pkgname}/SESSIONKEY.txt" "${pkgdir}/usr/share/${pkgname}/SESSIONKEY.txt"
  ln -vs "/etc/${pkgname}/APIKEY.txt" "${pkgdir}/usr/share/${pkgname}/APIKEY.txt"
  # systemd service
  install -vDm 644 "${srcdir}/${pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"
  # systemd-sysusers
  install -vDm 644 "${srcdir}/${pkgname}-sysusers.conf" "${pkgdir}/usr/lib/sysusers.d/${pkgname}.conf"
  # systemd-tmpfiles
  install -vDm 644 "${srcdir}/${pkgname}-tmpfiles.conf" "${pkgdir}/usr/lib/tmpfiles.d/${pkgname}.conf"
  # docs
  install -vDm 644 {CHANGELOG,CONTRIBUTING,README}.md -t "${pkgdir}/usr/share/doc/${pkgname}/"
}
