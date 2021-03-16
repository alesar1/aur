#Maintainer: Jernuh Zakalwe <jzakalwe1st@gmail.com>
pkgname=evesetup
pkgver=1747682
pkgrel=9
pkgdesc="An inofficial EVE Online Launcher Setup Tool."
changelog=$pkgname.changelog
arch=(x86_64)
url="https://forums.eveonline.com/t/299030"
license=('zlib')

depends=('icu'
         'openssl'
         'openssl-1.0'
         'p7zip'
         'qt5-base'
         'qt5-declarative'
         'qt5-translations'
         'qt5-location'
         'qt5-webchannel'
         'qt5-webengine'
         'qt5-websockets'
         'vulkan-icd-loader'
         'wine')

optdepends=('libnotify' 'winetricks')

conflicts=('evelauncher' 'evesetup_dev' 'evesetup-beta')

source=("evelauncher.desktop"
        "evelauncher.sh"
        "evelauncher.sh.in"
        "evelauncher.sh.real"
        "evesetup.shlib"
        "everegedit.desktop"
        "evewine"
        "evewinecfg.desktop"
        "evewinetricks.desktop"
        "evewinetricks"
        "evebackup.desktop"
        "evebackup"
        "everestore.desktop"
        "evelauncher.kwinrule"
        "evelauncher.lua"
        "build_installer.sh"
        "build_lite_installer.sh"
        "setup.sh.in"
        "setup_lite.sh.in"
        "eve-icons.tar.gz"
        "eve-icons_large.tar.gz"
        "eve-transl5.12-de.tar.gz"
        "eve-transl5.12-en.tar.gz"
        "eve-transl5.12-fr.tar.gz"
        "eve-transl5.12-ko.tar.gz"
        "eve-transl5.12-ru.tar.gz"
        "eve-transl5.12-zh.tar.gz"
        "https://github.com/megastep/makeself/releases/download/release-2.4.0/makeself-2.4.0.run"
        "https://github.com/doitsujin/dxvk/releases/download/v1.8.1/dxvk-1.8.1.tar.gz"
        "https://binaries.eveonline.com/evelauncher-${pkgver}.tar.gz")

noextract=('eve-transl5.12-de.tar.gz'
           'eve-transl5.12-en.tar.gz'
           'eve-transl5.12-fr.tar.gz'
           'eve-transl5.12-ko.tar.gz'
           'eve-transl5.12-ru.tar.gz'
           'eve-transl5.12-zh.tar.gz'
           'https://github.com/megastep/makeself/releases/download/release-2.4.0/makeself-2.4.0.run')

package() {
        install -d "${pkgdir}/opt/${pkgname}/bin"
        install -d "${pkgdir}/opt/${pkgname}/doc"
        install -d "${pkgdir}/opt/${pkgname}/lib"
        install -d "${pkgdir}/opt/${pkgname}/lib/dxvk"
        install -d "${pkgdir}/usr/bin"
        install -d "${pkgdir}/usr/share/applications"
        install -d "${pkgdir}/usr/share/icons"
        sed -i s,ELVER=\"\",ELVER=\"${pkgver}\", "${srcdir}/evelauncher.sh"
        sed -i 2\ s,[0-9].*\",${pkgver}\", "${srcdir}/evelauncher.lua"
        for cmd in backup launcher.sh regedit restore wine winecfg winetricks ;do
            cmd=eve$cmd
            if [ -f "${srcdir}/$cmd" ] ;then
                sed -i s,SETUPDIR=\"\",SETUPDIR=\"/opt/${pkgname}\", "${srcdir}/$cmd"
                sed -i s,./evesetup.shlib,/opt/${pkgname}/lib/evesetup.shlib, "${srcdir}/$cmd"
                install "${srcdir}/$cmd" "${pkgdir}/opt/${pkgname}/bin"
            else
                if [ "$cmd" = "everestore" ] ;then
                    ln -s evebackup "${pkgdir}/opt/${pkgname}/bin/$cmd"
                else
                    ln -s evewine "${pkgdir}/opt/${pkgname}/bin/$cmd"
                fi
            fi
            ln -s "/opt/${pkgname}/bin/$cmd" "${pkgdir}/usr/bin/$cmd"
            if [ ! "$cmd" = "evewine" ] ;then
                oexec=$(grep Exec= ./${cmd%.*}.desktop)
                sed -i s,$oexec,Exec=/usr/bin/$cmd, ./${cmd%.*}.desktop
                cp "${srcdir}/${cmd%.*}.desktop" "${pkgdir}/usr/share/applications/"
            fi
        done
        cp ${srcdir}/evesetup.shlib ${pkgdir}/opt/${pkgname}/lib
        cp ${srcdir}/evelauncher.lua ${pkgdir}/opt/${pkgname}/doc
        cp ${srcdir}/evelauncher.kwinrule ${pkgdir}/opt/${pkgname}/doc
        cp -r ${srcdir}/dxvk-1.8.1/x32 ${pkgdir}/opt/${pkgname}/lib/dxvk/
        cp -r ${srcdir}/dxvk-1.8.1/x64 ${pkgdir}/opt/${pkgname}/lib/dxvk/
        echo "1.8.1" >${pkgdir}/opt/${pkgname}/lib/dxvk/version
        cp -r ${srcdir}/icons ${pkgdir}/usr/share/
        rm -rf ${srcdir}/evelauncher/resources/ ${srcdir}/evelauncher/plugins/
        rm -f ${srcdir}/evelauncher/*[Qq]t* ${srcdir}/evelauncher/libcrypto*
        rm -f ${srcdir}/evelauncher/libicu* ${srcdir}/evelauncher/libssl*
        rm -f ${srcdir}/evelauncher/libpng* ${srcdir}/evelauncher/libxcb*
        rm -f ${srcdir}/evelauncher/roots.pem
        cp -f ${srcdir}/evelauncher.sh.real ${srcdir}/evelauncher/evelauncher.sh
        chmod 0755 ${srcdir}/evelauncher/*
        chmod 0644 ${srcdir}/evelauncher/*.qm
        chmod 0644 ${srcdir}/evelauncher/errorpage/*
        ln -sf evelauncher.sh ${srcdir}/evelauncher/LogLite.sh
        ln -sf libgpr.so.6.0.0 ${srcdir}/evelauncher/libgpr.so
        ln -sf libgpr.so.6.0.0 ${srcdir}/evelauncher/libgpr.so.6
        ln -sf libgrpc++.so.1.12.0 ${srcdir}/evelauncher/libgrpc++.so
        ln -sf libgrpc++.so.1.12.0 ${srcdir}/evelauncher/libgrpc++.so.1
        ln -sf libgrpc++.so.1.12.0 ${srcdir}/evelauncher/libgrpc++.so.6
        ln -sf libgrpc.so.6.0.0 ${srcdir}/evelauncher/libgrpc.so
        ln -sf libgrpc.so.6.0.0 ${srcdir}/evelauncher/libgrpc.so.6
        ln -sf libprotobuf.so.16.0.0 ${srcdir}/evelauncher/libprotobuf.so
        ln -sf libprotobuf.so.16.0.0 ${srcdir}/evelauncher/libprotobuf.so.16
        find ${srcdir}/evelauncher/ -type f -exec strip -s {} 2>/dev/null \;
        tar czf ${pkgdir}/opt/${pkgname}/lib/evelauncher-${pkgver}.tar.gz evelauncher/
}

sha256sums=('ce85defa2698ea72e88221d72424fb953f86836494ecc0e4006f41ec89682af4'
            '29b6f2cda542c8f3f3845fb3e1ff3e9ac2a645d389c1618bdac5fa69947a2b4b'
            '77b8a8d1cde800956dadf8abf35287c34b3c844c40dfa8f89ed01ca2cde345fb'
            '168478fca0bc7be5be3ed2a44e3b64732d2b0ef0758f7d9bd51ec56b7e0713eb'
            'fdb777d7f728681055f2038c9b04d153a131086665ca189814b013655465fc22'
            'a8e604e6481b9a386269b6252852ee57812fc932f44f767982c4dbac168bb03b'
            '66dd912ceb3073e6e210d7addc7d284fb5bdf2b746ac723c8b57ead19ffe75b4'
            '546aaf5669dc3d3f1b2fff1b9a493d8ba31c19940a04fa4b9eb080e7301df4bd'
            'c83beba543663b926d28d0eda98f1035cd73327da50f718a487763d300415a24'
            '355e2d287c77ec4313792548b66de8a751e1f8489b2bf9e734ce6b967c6a36d5'
            '30b6440b842c19df64892cc560c274a7cc4f5de910a9f81e12dd0d76da561474'
            'ebdeaa2a143b8d247d94b4a57a45065c299253c074f5d741870a78dd384c29f0'
            '261da84107168979d241c60cd7adbfee0f6675464675faaefd5f6140009d54d8'
            '609c021ee09ced450b1aeda9c3dd586ebfbc17d2bdccbb4be69de70d661d12c8'
            'c53c6f09a0d2d12a4360bc4283d6259de1f47cfc29f708fdd9b960aab30af4ef'
            '5b77ced59ea81a4d4caf2e0f3a30beeab6f0ca584af1f7b297f99043a01b3773'
            'd1364de23e651e2f187d53e9064d76d8d69b63dc9eaba9e65c99964cb39cecd9'
            '60b6f5175916c40ed355ef29fb637743227a2b25c446a9239df69d320f2667fa'
            '4e9083c96ada9c607b12fc1be77db595a6932d01d7c6b224a3c546aa98f37b32'
            '69b98d923c08c6fb035c0c6905ec5e9c73273b694f8f3497777d44597dbe63e3'
            '762db1df07dfcf526fe634b4b589a08e8affefb2f79f02cff2624c70e0820422'
            '980d68abd6f4a662b69efd19145112e88f349044fa1ed5cb6d0a840a92cb42e4'
            '777ad02015e07a6f7698b2c373997f5152954592acee85e3b189a4a7270326b1'
            'ab005b213aec42b21d2e5ef2dcbff4b0a97ee7f7a1df5dc6401afa95271000d1'
            '03950f576befa34d95fe2839a752f15584a4001c3b02416bf22e9991f03b856b'
            '1a83a791b5a189823f71cdfb1e0c0e15139ff7f563bfb3eac70a5fa4ad9ebc22'
            '5ffd6578dfbb9bf1647fbae819e3ddae0722c2613779c122d86963123470359f'
            'ca66a6113ce98152b85c8d847949f8c90ab9ba798e106bfc225d4ed3c2e2e3e2'
            '756a09c46f8279ade84456e3af038f64613a51e00a2d4cfffa4c91c10ede60e8'
            '98ccf4b9932d7fb74896461f764c61921592a73089e3fcb4063fe7836c6a0bca')
