import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton, WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import { FaWallet} from 'react-icons/fa';
import { GrMenu, GrClose } from 'react-icons/gr';

import React from "react";
export default function Header() {
    const wallet = useWallet();
    return (
        <div data-elementor-type="header" data-elementor-id="7" className="elementor elementor-7 elementor-location-header"
            data-elementor-settings="[]">
            <div className="elementor-section-wrap">
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-2c9a2fd elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="2c9a2fd" data-element_type="section"
                    data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-d62c752"
                            data-id="d62c752" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-7e3412e elementor-widget elementor-widget-image"
                                    data-id="7e3412e" data-element_type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                        <img width="285" height="283"
                                            src="https://solganja.com/wp-content/uploads/2021/11/cold-smooth-tasty.-3-e1637511829708.png"
                                            className="attachment-full size-full" alt="" loading="lazy"
                                            srcSet="https://solganja.com/wp-content/uploads/2021/11/cold-smooth-tasty.-3-e1637511829708.png 285w, https://solganja.com/wp-content/uploads/2021/11/cold-smooth-tasty.-3-e1637511829708-150x150.png 150w"
                                            sizes="(max-width: 285px) 100vw, 285px"
                                            style={{ width: '100%', height: '99.3%', maxWidth: '285px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-23cf688"
                            data-id="23cf688" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-48327ec elementor-widget elementor-widget-theme-site-title elementor-widget-heading"
                                    data-id="48327ec" data-element_type="widget"
                                    data-widget_type="theme-site-title.default">
                                    <div className="elementor-widget-container">
                                        <h2 className="elementor-heading-title elementor-size-default"><a
                                            href="https://solganja.com">Solganja</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-b17a23b"
                            data-id="b17a23b" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-4b27495 elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
                                    data-id="4b27495" data-element_type="widget"
                                    data-settings="{&quot;layout&quot;:&quot;horizontal&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;&lt;i className=\&quot;fas fa-caret-down\&quot;&gt;&lt;\/i&gt;&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;toggle&quot;:&quot;burger&quot;}"
                                    data-widget_type="nav-menu.default">
                                    <div className="elementor-widget-container">
                                        <nav migration_allowed="1" migrated="0" role="navigation"
                                            className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-fade">
                                            <ul id="menu-1-4b27495" className="elementor-nav-menu">
                                                <li
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-9">
                                                    <a href="#" className="elementor-item elementor-item-anchor">How To Buy</a>
                                                </li>
                                                <li
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-10">
                                                    <a href="#" className="elementor-item elementor-item-anchor">Plant Seeds</a>
                                                </li>
                                                <li
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13">
                                                    <a href="#" className="elementor-item elementor-item-anchor">Roadmap</a>
                                                </li>
                                                <li
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12">
                                                    <a href="#" className="elementor-item elementor-item-anchor">Tokenomics</a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <div className="elementor-menu-toggle" role="button" tabIndex="0"
                                            aria-label="Menu Toggle" aria-expanded="false">
                                            {/* <i aria-hidden="true" role="presentation"
                                                className="elementor-menu-toggle__icon--open eicon-menu-bar"></i> */}
                                                <GrMenu />
                                            {/* <i aria-hidden="true" role="presentation"
                                                className="elementor-menu-toggle__icon--close eicon-close"></i> */}
                                                <GrClose />
                                            <span className="elementor-screen-only">Menu</span>
                                        </div>
                                        <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container"
                                            role="navigation" aria-hidden="true">
                                            <ul id="menu-2-4b27495" className="elementor-nav-menu">
                                                <li
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-9">
                                                    <a href="#" className="elementor-item elementor-item-anchor"
                                                        tabIndex="-1">How To Buy</a></li>
                                                <li
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-10">
                                                    <a href="#" className="elementor-item elementor-item-anchor"
                                                        tabIndex="-1">Plant Seeds</a></li>
                                                <li
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13">
                                                    <a href="#" className="elementor-item elementor-item-anchor"
                                                        tabIndex="-1">Roadmap</a></li>
                                                <li
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12">
                                                    <a href="#" className="elementor-item elementor-item-anchor"
                                                        tabIndex="-1">Tokenomics</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-20ba154"
                            data-id="20ba154" data-element_type="column">
                            <div className="elementor-widget-wrap">
                            </div>
                        </div>
                        <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-bcede4e"
                            data-id="bcede4e" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-91a2b1b elementor-widget elementor-widget-button"
                                    data-id="91a2b1b" data-element_type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-button-wrapper">
                                            {!wallet.connected ?
                                                <WalletMultiButton
                                                    className="elementor-button-link elementor-button elementor-size-sm"
                                                    startIcon={null}
                                                    children={<span className="elementor-button-content-wrapper">
                                                        <span className="elementor-button-icon elementor-align-icon-left">
                                                            <FaWallet />
                                                        </span>
                                                        <span className="elementor-button-text">Connet Wallet</span>
                                                    </span>} /> :
                                                <WalletDisconnectButton
                                                    className="elementor-button-link elementor-button elementor-size-sm"
                                                    style={{ display: 'flex' }}
                                                    children={<span className="elementor-button-content-wrapper">
                                                        <div className="elementor-button-text">
                                                            {wallet.publicKey.toBase58().slice(0, 4)}...{wallet.publicKey.toBase58().slice(-4)}
                                                        </div>
                                                    </span>} />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}