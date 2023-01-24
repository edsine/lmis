import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Card } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import Common from "../inc/Common";


const PrivacyPolicy = () => {
	return (
		<>
	<Common />

	<Container>
		<Row className="my-5">
			<Col>
				<h1 className="text-center">Privacy Policy</h1>
				<p>
				The documents and or information found in this site are for informational purposes. The Ministry of Labour and Social Security makes no warranty, express or implied and assumes no legal responsibility for the accuracy, completeness or usefulness of any information or process disclosed. The posting of rules, statutes or regulations are done so as a means of information and reference and does not preclude the reader from bearing the responsibility of obtaining up-to-date official copies of the same. No representation or warranties are made in respect of any information, person or thing appearing on this site. Without limiting the generality of the foregoing, the public is asked to acknowledge that it is your sole responsibility to satisfying yourself of any information appearing herein and of the suitability for your purpose of material taken from this site. Prospective employers and employees and other users of this site assume full responsibility for any act or omission taken by them pursuant to any information obtained from this site. 
				</p>



				<h2 className="mt-4">Access</h2>
				<p>
				Access to this site is public, however, it should be clearly understood that anyone who accesses this site does so with the clear understanding that while on this site they are in agreement with the monitoring of such visit and are in agreement with all the applicable laws, rules and regulations governing the unlawful hacking, breaking into, changing or modifying the content, or the posting or submission of any document, letter which will violate the copyright or other laws of Nigeria.
				</p>
				<h2>Collection of your Personal Information</h2>
				<p>
					We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services available on the LMIS website and associate platforms. These may include:
				</p>
				<ListGroup>
					<ListGroupItem>
						<FaCheck className="mr-2" /> Contact information, such as name, email address, and telephone number
					</ListGroupItem>
					<ListGroupItem>
						<FaCheck className="mr-2" /> Unique identifiers, such as user name, account number, and password
					</ListGroupItem>
					<ListGroupItem>
						<FaCheck className="mr-2" /> Demographic information, such as age, gender, location, and preferences
					</ListGroupItem>
					<ListGroupItem>
						<FaCheck className="mr-2" /> Financial information, such as credit card number, bank account number and expiration date
					</ListGroupItem>
				</ListGroup>
				<h2 className="mt-4">Use of your Personal Information</h2>
				<p>
					The LMIS website and associates may use your personal information to:
				</p>
				<ListGroup as="ol">
					<ListGroupItem as="li">
						<FaCheck className="mr-2" /> Provide personalized content and information
					</ListGroupItem>
					<ListGroupItem as="li">
						<FaCheck className="mr-2" /> Provide and bill for services and products
					</ListGroupItem>
					<ListGroupItem as="li">
						<FaCheck className="mr-2" /> Administer your account
					</ListGroupItem>
					<ListGroupItem as="li">
						<FaCheck className="mr-2" /> Communicate with you about new products and services
					</ListGroupItem>
					<ListGroupItem as="li">
						<FaCheck className="mr-2" /> Send you promotional materials
					</ListGroupItem>
					<ListGroupItem as="li">
						<FaCheck className="mr-2" /> Improve the LMIS website and services
					</ListGroupItem>
				</ListGroup>
				<h2 className="mt-4">Sharing of your Personal Information</h2>
				<p>
					We do not share your personal information with third parties for their marketing purposes without your explicit consent. However, the LMIS website may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to:
				</p>
				<ListGroup as="ol">
					<ListGroupItem as="li">
						<FaCheck className="mr-2" /> Conform to legal requirements or comply with legal process
					</ListGroupItem>
					<ListGroupItem as="li">
						<FaCheck className="mr-2" /> Protect and defend the rights or property of the LMIS
					</ListGroupItem>
					<ListGroupItem as="li">
						<FaCheck className="mr-2" /> Act under exigent circumstances to protect the personal safety of users of the LMIS website or the public
					</ListGroupItem>
					<ListGroupItem as="li">
						<FaCheck className="mr-2" /> Facilitate the transfer of the platform
					</ListGroupItem>
				</ListGroup>
				<h2 className="mt-4">Security of your Personal Information</h2>
				<p>
					LMIS website secures your personal information from unauthorized access, use, or disclosure. LMIS website uses the following methods for this purpose:
				</p>
				<ListGroup as="ol">
					<ListGroupItem as="li">
						<FaCheck className="mr-2" /> Secure Sockets Layer (SSL)
					</ListGroupItem>
					<ListGroupItem as="li">
						<FaCheck className="mr-2" /> Secure Data Storage
					</ListGroupItem>
					<ListGroupItem as="li">
						<FaCheck className="mr-2" /> Access Control
					</ListGroupItem>
					<ListGroupItem as="li">
						<FaCheck className="mr-2" /> Regularly Reviewing and Updating
					</ListGroupItem>
				</ListGroup>
				<Card className="my-4">
					<Card.Body>
						<Card.Title>
							<h4>Note</h4>
						</Card.Title>
						<Card.Text>
							We will occasionally update this privacy policy. We will notify you about material changes by sending a notice to the primary email address specified in your account or by placing a prominent notice on our site.
						</Card.Text>
					</Card.Body>
				</Card>


				<Card className="my-4">
					<Card.Body>
						<Card.Title>
							<h4>Acceptance</h4>
						</Card.Title>
						<Card.Text>
						<p>I have read, understood and accept the foregoing conditions.</p>
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		</Container>
	</>
		);
}
export default PrivacyPolicy;
